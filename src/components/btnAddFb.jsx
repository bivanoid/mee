import { Plus } from "lucide-react"
import { useState } from "react"

export default function BtnAddFb({ setShowAddFb }) {
  return (
    <button
      onClick={() => setShowAddFb(prev => !prev)}
      className="link-to-addfeedback"
    >
     <Plus/> Add Feedback
    </button>
  )
}
