import React, { useState, useEffect } from 'react';
import { getMockReviews, addMockReview } from '../utils/mockData';
import './TranslationSite.css';

const TranslationSite = () => {
  const [isRtl, setIsRtl] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    feedback: ''
  });

  // Language data
  const content = {
    en: {
      tagline: "Professional English ↔ Arabic Translation Services",
      values: "Fast · Accurate · Confidential",
      aboutTitle: "About Me",
      aboutText: "Hi, I'm Fatema Ahmad Kaddah, a professional translator with 5+ years of experience in general, technical, and legal translation. I focus on delivering accurate, clear, and culturally appropriate translations on time.",
      servicesTitle: "Services",
      services: [
        "🔹 General Translation",
        "🔹 Technical & Marketing Translation", 
        "🔹 Resume & CV Translation",
        "🔹 Proofreading & Editing"
      ],
      samplesTitle: "Sample Translations",
      samples: [
        "Marketing Translation Sample",
        "Technical Translation Sample", 
        "Bio Translation Sample"
      ],
      pricingTitle: "Pricing",
      pricingNote: "Rates may vary based on complexity and subject matter.",
      pricingHeaders: {
        service: "Service",
        rate: "Recommended Rate"
      },
      pricingServices: [
        "🔹 General Translation",
        "🔹 Technical / Marketing Translation",
        "🔹 Resume / CV Translation",
        "🔹 Proofreading Only",
        "🔹 Urgent Delivery (24h)"
      ],
      reviewsTitle: "Client Reviews",
      leaveReviewTitle: "Leave a Review",
      namePlaceholder: "Your Name",
      feedbackPlaceholder: "Your feedback...",
      ratingLabel: "Rating:",
      submitReview: "Submit Review",
      langToggle: "العربية"
    },
    ar: {
      tagline: "خدمات ترجمة احترافية بين الإنجليزية والعربية",
      values: "سريعة · دقيقة · سرية",
      aboutTitle: "من أنا",
      aboutText: "مرحبًا، أنا فاطمة أحمد قدّاح، مترجمة محترفة بخبرة تزيد عن 5 سنوات في الترجمة العامة والتقنية والقانونية. أركز على تقديم ترجمات دقيقة وواضحة ومناسبة ثقافيًا في الوقت المحدد.",
      servicesTitle: "الخدمات",
      services: [
        "🔹 ترجمة عامة",
        "🔹 ترجمة تقنية وتسويقية",
        "🔹 ترجمة السيرة الذاتية", 
        "🔹 التدقيق اللغوي والتحرير"
      ],
      samplesTitle: "عينات الترجمة",
      samples: [
        "عينة ترجمة تسويقية",
        "عينة ترجمة تقنية",
        "عينة ترجمة سيرة ذاتية"
      ],
      pricingTitle: "الأسعار",
      pricingNote: "قد تختلف الأسعار بناءً على مدى تعقيد المحتوى وموضوعه.",
      pricingHeaders: {
        service: "الخدمة",
        rate: "السعر الموصى به"
      },
      pricingServices: [
        "🔹 ترجمة عامة",
        "🔹 ترجمة تقنية وتسويقية",
        "🔹 ترجمة السيرة الذاتية",
        "🔹 التدقيق اللغوي فقط",
        "🔹 تسليم عاجل (24 ساعة)"
      ],
      reviewsTitle: "تقييمات العملاء",
      leaveReviewTitle: "اترك تقييمًا",
      namePlaceholder: "اسمك",
      feedbackPlaceholder: "رأيك أو تعليقك...",
      ratingLabel: "التقييم:",
      submitReview: "إرسال التقييم",
      langToggle: "English"
    }
  };

  const currentLang = isRtl ? 'ar' : 'en';
  const t = content[currentLang];

  useEffect(() => {
    // Load mock reviews on component mount
    const mockReviews = getMockReviews();
    setReviews(mockReviews);
  }, []);

  const toggleLanguage = () => {
    setIsRtl(!isRtl);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.feedback) {
      alert('Please fill in all fields.');
      return;
    }

    const newReview = addMockReview(formData);
    setReviews(prev => [newReview, ...prev]);
    
    // Clear form
    setFormData({
      name: '',
      rating: 5,
      feedback: ''
    });
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className={`translation-site ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="site-header">
        <nav>
          <button 
            className="lang-toggle" 
            onClick={toggleLanguage}
          >
            {t.langToggle}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h1 className="brand-name">Translio</h1>
          <p className="tagline">{t.tagline}</p>
          <p className="values">{t.values}</p>
        </section>

        <section className="about-section">
          <h2>{t.aboutTitle}</h2>
          <img 
            src="https://i.ibb.co/WNNPVBYx/IMG-20250716-WA0000.jpg" 
            alt="Fatema Ahmad Kaddah" 
            className="profile-pic"
          />
          <p>{t.aboutText}</p>
        </section>

        <section className="services-section">
          <h2>{t.servicesTitle}</h2>
          <ul>
            {t.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="samples-section">
          <h2>{t.samplesTitle}</h2>
          <div className="sample-buttons">
            {t.samples.map((sample, index) => {
              const filenames = ['marketing-sample.pdf', 'technical-sample.pdf', 'bio-sample.pdf'];
              return (
                <a 
                  key={index}
                  href={`/${filenames[index]}`}
                  download 
                  className="sample-btn"
                >
                  {sample}
                </a>
              );
            })}
          </div>
        </section>

        <section className="reviews-section">
          <h2>{t.reviewsTitle}</h2>
          <div className="reviews-container">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="rating">{renderStars(review.rating)}</div>
                <p className="feedback">{review.feedback}</p>
                <p className="name">- {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="leave-review-section">
          <h2>{t.leaveReviewTitle}</h2>
          <form className="review-form" onSubmit={handleSubmitReview}>
            <input
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <div className="rating-group">
              <label>{t.ratingLabel}</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                required
              >
                <option value="5">★★★★★</option>
                <option value="4">★★★★☆</option>
                <option value="3">★★★☆☆</option>
                <option value="2">★★☆☆☆</option>
                <option value="1">★☆☆☆☆</option>
              </select>
            </div>
            <textarea
              name="feedback"
              placeholder={t.feedbackPlaceholder}
              value={formData.feedback}
              onChange={handleInputChange}
              required
            />
            <button type="submit">{t.submitReview}</button>
          </form>
        </section>
      </main>

      <a 
        href="https://wa.me/963940172994" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};

export default TranslationSite;