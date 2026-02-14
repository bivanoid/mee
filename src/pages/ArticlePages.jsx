"use client"

import { useEffect, useState, useContext, useRef } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { supabase } from "./supabaseClient"
import "../styles/blogs/blog.css"
import Footer from "../components/footer"

import { LenisContext } from "../App"
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-java";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-php-extras";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-json";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import ButtonUp from "../components/buttonUp"

import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import lenis from "../components/lenisSc"
import { ArrowUpRight } from "lucide-react"
import { Share2 } from "lucide-react"

const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        text: "Cek halaman ini!",
        url: window.location.href,
      })
    } catch (error) {
      console.error("Gagal membagikan", error)
    }
  } else {
    alert("Fitur share tidak didukung di browser ini.")
  }
}

export default function ArticlePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const lenisRef = useContext(LenisContext)

  const [article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const mainRef = useRef(null)

  useEffect(() => {
    if (!article) return

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        Prism.highlightAll()

        document.querySelectorAll('pre[class*="language-"]').forEach((pre) => {
          let toolbar = pre.querySelector('.toolbar')

          if (!toolbar) {
            const toolbarWrapper = document.createElement('div')
            toolbarWrapper.className = 'code-toolbar'

            pre.parentNode.insertBefore(toolbarWrapper, pre)
            toolbarWrapper.appendChild(pre)

            toolbar = document.createElement('div')
            toolbar.className = 'toolbar'
            toolbarWrapper.appendChild(toolbar)
          }

          if (toolbar.querySelector('.copy-btn')) return

          const toolbarItem = document.createElement('div')
          toolbarItem.className = 'toolbar-item'

          const button = document.createElement('button')
          button.className = 'copy-btn'
          button.textContent = 'Copy'
          button.onclick = () => {
            const code = pre.querySelector('code').textContent

            // Fungsi copy dengan fallback untuk mobile
            const copyToClipboard = (text) => {
              // Method 1: Modern clipboard API (untuk browser yang support)
              if (navigator.clipboard && navigator.clipboard.writeText) {
                return navigator.clipboard.writeText(text)
              }

              // Method 2: Fallback untuk mobile/browser lama
              return new Promise((resolve, reject) => {
                const textArea = document.createElement('textarea')
                textArea.value = text
                textArea.style.position = 'fixed'
                textArea.style.left = '-999999px'
                textArea.style.top = '-999999px'
                document.body.appendChild(textArea)
                textArea.focus()
                textArea.select()

                try {
                  const successful = document.execCommand('copy')
                  document.body.removeChild(textArea)
                  if (successful) {
                    resolve()
                  } else {
                    reject(new Error('Copy failed'))
                  }
                } catch (err) {
                  document.body.removeChild(textArea)
                  reject(err)
                }
              })
            }

            copyToClipboard(code)
              .then(() => {
                button.textContent = 'Copied!'
                setTimeout(() => {
                  button.textContent = 'Copy'
                }, 2000)
              })
              .catch((err) => {
                console.error('Failed to copy:', err)
                button.textContent = 'Failed'
                setTimeout(() => {
                  button.textContent = 'Copy'
                }, 2000)
              })
          }

          pre.appendChild(button)
        })
      })
    })
  }, [article])

  useEffect(() => {
    if (lenisRef?.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [lenisRef])






  // Ambil data dari Supabase
  useEffect(() => {
    async function fetchArticle() {
      if (!id) {
        setError("Tidak ada ID artikel")
        setIsLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from("blog")
          .select("*")
          .eq("id", id)
          .single()

        if (error) throw error
        if (!data) {
          setError("Artikel tidak ditemukan")
        } else {
          const parser = new DOMParser()
          const doc = parser.parseFromString(data.content_html || "", "text/html")
          doc.querySelectorAll("table").forEach((table) => {
            const wrapper = doc.createElement("div")
            wrapper.className = "con-table"
            table.parentNode.insertBefore(wrapper, table)
            wrapper.appendChild(table)
          })

          // Simpan hasil HTML yang sudah dimodifikasi
          data.content_html = doc.body.innerHTML

          setArticle(data)
          setTimeout(() => Prism.highlightAll(), 300)
        }
      } catch (err) {
        setError("Gagal memuat artikel: " + err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  // Optimasi render highlight saat scroll (lazy highlight)
  useEffect(() => {
    if (!mainRef.current) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Prism.highlightAllUnder(entry.target)
          }
        })
      },
      { rootMargin: "200px" }
    )

    observer.observe(mainRef.current)
    return () => observer.disconnect()
  }, [article])

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  function handleGoBack() {
    navigate(-1, { state: { restoreScroll: true } })
  }

  const ScrollUpTrigger = useRef(null);

function scrollToTop() {
  lenis.scrollTo(ScrollUpTrigger.current);
  console.log('up')
}

  // ========================
  // 🌀 STATE LOADING
  // ========================
  if (isLoading)
    return (
      <div className="body-blog loading-state">
        <div className="loading-container">
          <div className="loading-text">Loading...</div>

          <div className="article-skeleton">
            <div className="skeleton-title"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
            <div className="skeleton-image"></div>
            <div className="skeleton-paragraph"></div>
            <div className="skeleton-paragraph"></div>
          </div>
        </div>
      </div>
    )

  if (error)
    return (
      <div className="body-blog">
        <div className="error-state">
          <p>{error}</p>
          <button className="try-again-blog" onClick={handleGoBack}>
            Kembali
          </button>
        </div>
      </div>
    )

  if (!article)
    return (
      <div className="body-blog">
        <p>Artikel tidak ditemukan</p>
        <button onClick={handleGoBack}>Kembali</button>
      </div>
    )

  return (

    <div className="body-blog">

    <div className="scrollUpTrigger" ref={ScrollUpTrigger}></div>

      <div className="article-modal-overlay" style={{ background: "transparent" }}>
        <div className="article-modal" style={{ border: "none" }}>
          <div className="article-modal-content">
            <aside className="asside-article">
              <div className="asside-main">
                <div className="navigation-article">
                  <Link className="path-name back-button" to={'/blog'}><p>/blog (back)</p></Link>
                  <p className="path-name">article</p>
                  <p className="path-name share-button" onClick={handleShare}>share <Share2 /></p>
                </div>
                <div className="con-title-article">
                  <h1 className="article-modal-title">{article.title_blog || "Judul tidak tersedia"}</h1>
                  <h1 className="subtitle-article">{article.sub_title || "Judul tidak tersedia"}</h1>

                  <div className="con-user-uploader">
                    <div className="article-modal-author">
                      <div className="author-info">
                        <p className="author-name">{article.author || "/Firdhan Abivandya"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <main className="main-article">
              <p className="publish-date" >
                {article.created_at ? formatDate(article.created_at) : "Tanggal tidak tersedia"}
              </p>
              {article.image_url && (
                <div className="article-modal-image">
                  <img
                    src={article.image_url || "/placeholder.svg"}
                    alt={article.title_blog || "Artikel"}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = "https://via.placeholder.com/800x400?text=No+Image"
                    }}
                  />
                </div>
              )}

              <div className="article-modal-body">
                {article.content_html ? (
                  <div
                    className="rendered-html"
                    dangerouslySetInnerHTML={{ __html: article.content_html }}
                  />
                ) : article.text_blog ? (
                  <div
                    className="rendered-html"
                    dangerouslySetInnerHTML={{ __html: article.text_blog }}
                  />
                ) : (
                  <p>Konten tidak tersedia</p>
                )}
              </div>
              <ButtonUp onClick={scrollToTop} />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}