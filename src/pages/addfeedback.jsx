import React, { useEffect, useState } from 'react';
import "../styles/addfeedback/addfeedback.css";

// Supabase config
import { supabase } from "../pages/supabaseClient"
import { Forward } from 'lucide-react';

export default function AddFeedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(null);
  const [alertPopUp, setAlertPopUp] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // function untuk menampilkan alert
  const showAlert = (msg) => {
    setAlertPopUp(msg);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 2.5 detik sebelum animasi keluar

    setTimeout(() => {
      setAlertPopUp('');
    }, 3000); // 3 detik total, lalu hapus pesan
  };

  // Add user
  const addUser = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !rating) {
      showAlert('Please complete all required fields');
      return;
    }

    try {
      const { error } = await supabase
        .from('users')
        .insert([{ name, email, rating }]);

      if (error) {
        showAlert('Failed to submit feedback');
      } else {
        showAlert('Feedback submitted successfully!');
        setName('');
        setEmail('');
        setRating(null);
      }
    } catch (err) {
      console.error('❌ Unexpected error:', err);
      showAlert(`Unexpected error: ${err.message}`);
    }
  };

  const maxCharacters = 350;
  const remainingCharacters = maxCharacters - email.length;

  return (
    
      <div className="con-addfeedback">
        {alertPopUp && (
          <div className={`AlertPopUp ${isVisible ? "show" : "hide"}`}>
            <p><span className='red-alert'></span>{alertPopUp}</p>
          </div>
        )}
        
        <div className="con-form">
          <h2>
          How’s the <span className="andText">Mood Today?</span>
        </h2>

        <form onSubmit={addUser}>
          <div className="con-input">
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((num) => {
                const emoji = {
                  1: 'rating-1',
                  2: 'rating-2',
                  3: 'rating-3',
                  4: 'rating-4',
                  5: 'rating-5',
                }[num];

                return (
                  <div
                    key={num}
                    className={`rating-box ${rating === num ? 'selected' : ''}`}
                    onClick={() => setRating(num)}
                  >
                    <div className={`${emoji} rating-def`}></div>

                  </div>
                );
              })}
            </div>
            <input
              className="input-textarea"
              type="text"
              placeholder="Your Name"
              value={name}
              maxLength={50}
              onChange={(e) => setName(e.target.value)}
              
            />
            <div className='conTextArea'>
              <textarea
                className="textarea-addfeedback"
                placeholder="Type Out Something (Max 350 Characters)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={maxCharacters}
              />
              <div className={`character-count 
                ${remainingCharacters <= 350 ? 'good' : ''} 
                ${remainingCharacters <= 250 ? 'ok' : ''} 
                ${remainingCharacters <= 150 ? 'warning' : ''} 
                ${remainingCharacters <= 50 ? 'stop' : ''}
                ${remainingCharacters <= 0 ? 'limit' : ''}`}>
                {remainingCharacters} / {maxCharacters}
              </div>
            </div>
          </div>
            <button className="button-addfeedback" type="submit">Submit<Forward/></button>
        </form>
        </div>
      </div>
    
  );
}
