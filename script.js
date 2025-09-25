document.addEventListener("DOMContentLoaded", () => {
  // הסתרת loader אחרי 3.5 שניות
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3500);

  // ---------- ביקורות ----------
  const reviews = [
    "שירות מעולה! מונית הגיעה בזמן ונהג אדיב מאוד. – יוסי ח.",
    "נהג מקצועי ורכב נקי, אחלה חוויה. – שרה ל.",
    "הזמנתי בשעת לילה והכול היה מושלם. – דני פ.",
    "שירות מהיר, נהג אדיב ומחיר הוגן. – מיכל ק.",
    "כל נסיעה עם המוניות האלה נעימה ובטוחה. – רונן ד.",
    "נהגים מנוסים, זמינים תמיד ומקצועיים. – נועה ש.",
    "מומלץ מאוד לכל מי שצריך מונית בבאר שבע. – אבי ר.",
    "הזמנתי מונית לנתב\"ג, השירות היה מושלם. – יעל מ.",
    "רכב נקי, נהג אדיב ושירות מהיר. – תומר ג.",
    "שירות אישי, זמינות 24/7 ומחיר הוגן. – שרית ל.",
    "מוניות נקיות, נהגים אדיבים והגעה בזמן. – אלון פ.",
    "שירות מדהים, תמיד מגיעים בזמן. – דנה ר.",
    "הזמנתי עם המוניות כמה פעמים – אין תלונות! – ליאור ס.",
    "נהג מקצועי, אדיב ושירות מהיר. – עינת ב.",
    "חוויה מושלמת, נהגים נעימים ומקצועיים. – רועי כ."
  ];

  const reviewsSlider = document.getElementById("reviewsSlider");
  let currentIndex = 0;

  function showReview(index) {
      reviewsSlider.innerHTML = `<div class="review">${reviews[index]}</div>`;
  }

  function slideReviews(direction) {
      if(direction === 'next') {
          currentIndex = (currentIndex + 1) % reviews.length;
      } else if(direction === 'prev') {
          currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      }
      showReview(currentIndex);
  }

  // הצגת הביקורת הראשונה
  showReview(currentIndex);

  // החלפה אוטומטית כל 3 שניות
  setInterval(() => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
  }, 3000);

  // ---------- Lightbox קטלוג תמונות ----------
  const images = [
    "images/taxi1.jpg",
    "images/taxi2.jpg",
    "images/taxi3.jpg",
    "images/taxi4.jpg",
    "images/taxi5.jpg",
    "images/taxi6.jpg",
    "images/taxi7.jpg",
    "images/taxi8.jpg",
    "images/taxi9.jpg"
  ];

  let currentLightboxIndex = 0;

  window.openLightbox = function(index) {
    currentLightboxIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentLightboxIndex];
  }

  window.closeLightbox = function() {
    document.getElementById("lightbox").style.display = "none";
  }

  window.changeImage = function(n) {
    currentLightboxIndex = (currentLightboxIndex + n + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentLightboxIndex];
  }
});
