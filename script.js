document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3500);
});
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

// פונקציה להצגת ביקורת אחת בכל פעם
function showReview(index) {
    reviewsSlider.innerHTML = `<div class="review">${reviews[index]}</div>`;
}

// פונקציה לסלייד קדימה ואחורה
function slideReviews(direction) {
    if(direction === 'next') {
        currentIndex = (currentIndex + 1) % reviews.length;
    } else if(direction === 'prev') {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    }
    showReview(currentIndex);
}

// הצגת הביקורת הראשונה בעת טעינת הדף
showReview(currentIndex);
