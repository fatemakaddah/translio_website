// Mock data for reviews - simulating backend functionality
let mockReviews = [
  {
    id: 1,
    name: "أحمد محمد",
    rating: 5,
    feedback: "خدمة ممتازة وترجمة دقيقة جداً. أنصح بشدة بالتعامل مع فاطمة لأي مشروع ترجمة.",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    feedback: "Outstanding translation quality! Fatema delivered my legal documents perfectly translated with attention to cultural nuances.",
    createdAt: "2024-01-10"
  },
  {
    id: 3,
    name: "محمد العلي",
    rating: 4,
    feedback: "ترجمة احترافية وسريعة. التسليم كان في الوقت المحدد والجودة عالية.",
    createdAt: "2024-01-05"
  },
  {
    id: 4,
    name: "Lisa Chen",
    rating: 5,
    feedback: "Excellent work on my technical manual translation. Very professional and responsive to questions.",
    createdAt: "2024-01-02"
  },
  {
    id: 5,
    name: "عبد الله الأحمد",
    rating: 5,
    feedback: "أفضل مترجمة تعاملت معها. دقة في الترجمة وفهم عميق للمعنى المطلوب.",
    createdAt: "2023-12-28"
  }
];

// Function to get all mock reviews
export const getMockReviews = () => {
  return [...mockReviews].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

// Function to add a new mock review
export const addMockReview = (reviewData) => {
  const newReview = {
    id: Date.now(), // Simple ID generation
    name: reviewData.name,
    rating: parseInt(reviewData.rating),
    feedback: reviewData.feedback,
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  mockReviews.unshift(newReview);
  return newReview;
};

// Function to get reviews count
export const getReviewsCount = () => {
  return mockReviews.length;
};

// Function to get average rating
export const getAverageRating = () => {
  if (mockReviews.length === 0) return 0;
  const sum = mockReviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / mockReviews.length).toFixed(1);
};