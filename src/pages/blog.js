"use client"

import { useEffect, useRef, useState, useContext, useCallback } from "react"
import { supabase } from "./supabaseClient"
import "../styles/blogs/blog.css"
import Footer from "../components/footer"
import Alert from "../iconSvg/alertIc"
import Logo from "../components/logo"
import { useNavigate, useLocation } from "react-router-dom"
import Backic from "../iconSvg/backic"
import Menus from '../iconSvg/menus'
import Close from '../iconSvg/close'
import { Link } from 'react-router-dom'
import { LenisContext } from "../App"

const ITEMS_PER_PAGE = 6

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [displayedBlogs, setDisplayedBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [filter, setFilter] = useState("latest")
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [totalCount, setTotalCount] = useState(0)

  const navigate = useNavigate()
  const location = useLocation()
  const lenisRef = useContext(LenisContext)
  const observerTarget = useRef(null)
  const imageCache = useRef(new Set())

  // ✨ UPDATED: Optimasi untuk WebP images
  const getOptimizedImageUrl = useCallback((url) => {
    if (!url) return null
    
    // Jika sudah WebP dari Supabase, tidak perlu transform lagi
    if (url.includes('.webp')) {
      // Hanya resize jika perlu
      if (url.includes('supabase')) {
        return `${url}?width=400&quality=80`
      }
      return url
    }
    
    // Untuk format lain (legacy images), tetap convert ke WebP
    if (url.includes('supabase')) {
      return `${url}?width=400&quality=80&format=webp`
    }
    
    return url
  }, [])

  const LazyImage = ({ src, alt, className }) => {
    const [imageSrc, setImageSrc] = useState(null)
    const [imageLoaded, setImageLoaded] = useState(false)
    const imgRef = useRef()

    useEffect(() => {
      if (imageCache.current.has(src)) {
        setImageSrc(src)
        setImageLoaded(true)
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const optimizedSrc = getOptimizedImageUrl(src)
              setImageSrc(optimizedSrc)
              observer.disconnect()
            }
          })
        },
        { rootMargin: '50px' }
      )

      if (imgRef.current) {
        observer.observe(imgRef.current)
      }

      return () => observer.disconnect()
    }, [src])

    const handleLoad = () => {
      setImageLoaded(true)
      imageCache.current.add(src)
    }

    return (
      <div ref={imgRef} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }} />
        )}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={alt}
            loading="lazy"
            onLoad={handleLoad}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "https://via.placeholder.com/400x250?text=No+Image"
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        )}
      </div>
    )
  }

  const fetchBlogs = useCallback(async (filterType, page = 0, isSearch = false) => {
    const isInitialLoad = page === 0

    if (isInitialLoad) {
      setIsLoading(true)
      setCurrentPage(0)
      setDisplayedBlogs([])
    } else {
      setIsLoadingMore(true)
    }

    setError(null)

    try {
      const startIndex = page * ITEMS_PER_PAGE
      const endIndex = startIndex + ITEMS_PER_PAGE - 1

      let query = supabase
        .from("blog")
        .select('id, title_blog, sub_title, created_at, image_url', { count: 'exact' })
        .range(startIndex, endIndex)

      if (isSearch && searchQuery) {
        query = query.or(`title_blog.ilike.%${searchQuery}%,sub_title.ilike.%${searchQuery}%,`)
      }

      if (filterType === "latest") {
        query = query.order("created_at", { ascending: false })
      } else if (filterType === "oldest") {
        query = query.order("created_at", { ascending: true })
      }

      const { data, error, count } = await query

      if (error) throw error

      if (isInitialLoad) {
        setTotalCount(count || 0)
        setDisplayedBlogs(data || [])
        setHasMore((data?.length || 0) === ITEMS_PER_PAGE)
      } else {
        setDisplayedBlogs(prev => [...prev, ...(data || [])])
        setHasMore((data?.length || 0) === ITEMS_PER_PAGE)
      }

      setCurrentPage(page)

    } catch (err) {
      console.error("Error fetching blogs:", err)
      setError("Failed to load articles: " + (err.message || String(err)))
    } finally {
      setIsLoading(false)
      setIsLoadingMore(false)
    }
  }, [searchQuery])

  const handleSearch = useCallback(() => {
    const query = searchInput.trim()
    setSearchQuery(query)
    setCurrentPage(0)
    setDisplayedBlogs([])
    fetchBlogs(filter, 0, !!query)
  }, [searchInput, filter, fetchBlogs])

  const loadMoreBlogs = useCallback(() => {
    if (isLoadingMore || !hasMore) return
    fetchBlogs(filter, currentPage + 1, !!searchQuery)
  }, [currentPage, filter, hasMore, isLoadingMore, searchQuery, fetchBlogs])

  useEffect(() => {
    if (!observerTarget.current || !hasMore) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMoreBlogs()
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    )

    const currentTarget = observerTarget.current
    observer.observe(currentTarget)

    return () => {
      if (currentTarget) observer.unobserve(currentTarget)
    }
  }, [hasMore, isLoadingMore, loadMoreBlogs])

  useEffect(() => {
    fetchBlogs(filter, 0, false)
  }, [filter, fetchBlogs])

  useEffect(() => {
    if (location.state?.restoreScroll) {
      const savedPosition = sessionStorage.getItem('blogScrollPosition')
      if (savedPosition && lenisRef?.current) {
        setTimeout(() => {
          lenisRef.current.scrollTo(parseInt(savedPosition), { immediate: true })
          sessionStorage.removeItem('blogScrollPosition')
        }, 150)
      } else if (savedPosition) {
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition))
          sessionStorage.removeItem('blogScrollPosition')
        }, 150)
      }
    } else {
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }, [location.state, lenisRef])

  function handleFilterChange(newFilter) {
    setFilter(newFilter)
    setSearchQuery("")
    setSearchInput("")
    setCurrentPage(0)
    setDisplayedBlogs([])
  }

  let isOpenBlog = false;

  function openBlog() {
    ["menuShow", "closeBlog", "conArticle", "footerBlog", "backMenuIcon", "menuBlogIcon", "logoBlogIcon"].forEach((id) => {
      document.getElementById(id)?.classList.toggle("open-menu-blog")
    })

    isOpenBlog = !isOpenBlog;

    if (isOpenBlog) {
      document.body.classList.add('body-overflow-hidden-blog')
    } else {
      document.body.classList.remove('body-overflow-hidden-blog')
    }
  }

  function openArticle(article) {
    const scrollPos = lenisRef?.current?.scroll || window.pageYOffset
    sessionStorage.setItem('blogScrollPosition', scrollPos.toString())

    navigate(`/article/${article.id}`, {
      state: {
        article: {
          ...article,
          content_html: article.content_html,
          docx_url: article.docx_url
        }
      }
    })
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  return (
    <div className="body-blog" id="theblog">
      <div className="con-blog">
        <main>
          <div className="navigation-blog">
            <Link onClick={() => { document.body.classList.remove('body-overflow-hidden-blog') }} to='/' className="clstgr back-to-home-from-blog" id="backMenuIcon">
              <Backic />
            </Link>
            <div className="logoBlog" id="logoBlogIcon">
              <Logo />
            </div>
            <div className="menu-button-blog" id="menuBlogIcon" onClick={openBlog}>
              <Menus />
            </div>
          </div>

          <div className="con-article" id="conArticle">
            <div className="search-bar-container">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="search-input"
                />
                <button className="search-button" onClick={handleSearch}>
                  Search
                </button>
                {searchQuery && (
                  <button
                    className="clear-search"
                    onClick={() => {
                      setSearchInput("")
                      setSearchQuery("")
                      setCurrentPage(0)
                      fetchBlogs(filter, 0, false)
                    }}
                  >
                    × <span>Clear</span>
                  </button>
                )}
              </div>
            </div>

            {isLoading ? (
              <div className="loading-state">
                <p>Loading articles...</p>
              </div>
            ) : error ? (
              <div className="error-state">
                <Alert />
                <p>{error}</p>
                <button className="try-again-blog" onClick={() => fetchBlogs(filter, 0, false)}>
                  Try Again
                </button>
              </div>
            ) : displayedBlogs.length === 0 ? (
              <div className="empty-state">
                <p>{searchQuery ? `No articles found for "${searchQuery}"` : "No articles available"}</p>
              </div>
            ) : (
              <>
                {displayedBlogs.map((blog) => (
                  <div
                    className="article"
                    onClick={() => openArticle(blog)}
                    style={{ cursor: "pointer" }}
                    key={blog.id}
                  >
                    <div className="con-image-article">
                      {blog.image_url ? (
                        <LazyImage
                          src={blog.image_url}
                          alt={blog.title_blog || "Article"}
                          className="image-article"
                        />
                      ) : (
                        <div className="placeholder-image">No Image</div>
                      )}
                    </div>

                    <div className="column-article">
                      <div className="text-article">
                        <h1 className="title-article">{blog.title_blog || "Untitled"}</h1>
                        {blog.sub_title && (
                          <p className="subtitle-article">{blog.sub_title}</p>
                        )}
                        <p id="date-post">
                          {blog.created_at ? formatDate(blog.created_at) : "No date"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {hasMore && (
                  <div ref={observerTarget} className="con-loading-more">
                    {isLoadingMore ? (
                      <div className="loading-more">
                        <p>Loading more articles...</p>
                      </div>
                    ) : (
                      <div style={{ opacity: 0.4, fontSize: '14px', padding: '20px' }}>
                        <p>Scroll for more</p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </main>

        <div className="con-blog-sticky" id="menuShow">
          <div className="main-sticky-blog">
            <h1>
              /Options<span className="dot-introduction"></span>
            </h1>
            <div className="filter-by">
              <ul>
                <li
                  className={filter === "latest" ? "active" : ""}
                  onClick={() => handleFilterChange("latest")}
                >
                  Latest
                </li>
                <li
                  className={filter === "oldest" ? "active" : ""}
                  onClick={() => handleFilterChange("oldest")}
                >
                  Oldest
                </li>
              </ul>
              <button
                className="try-again-blog try-again-blog2"
                onClick={() => {
                  fetchBlogs(filter, 0, false)
                  openBlog()
                }}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="footerBlog">
        <Footer />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}