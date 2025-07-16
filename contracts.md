# Translation Website - Frontend/Backend Integration Contract

## Current Frontend Implementation Status
- ✅ Complete React application with all UI components
- ✅ Bilingual support (English/Arabic) with RTL layout
- ✅ Mock review system using local storage simulation
- ✅ Sample PDF downloads
- ✅ Professional pricing table
- ✅ WhatsApp integration
- ✅ Responsive design

## Mock Data Currently Used (src/utils/mockData.js)

### Reviews Mock Data Structure:
```javascript
{
  id: number,
  name: string,
  rating: number (1-5),
  feedback: string,
  createdAt: string (ISO date)
}
```

### Current Mock Reviews:
- 5 sample reviews (Arabic and English)
- Mix of ratings (4-5 stars)
- Realistic feedback content
- Sorted by creation date

## Backend API Contracts Needed

### 1. Reviews API Endpoints

#### GET /api/reviews
- **Purpose**: Fetch all reviews for display
- **Response**: Array of review objects
- **Status Codes**: 200 (success), 500 (server error)
- **Frontend Integration**: Replace getMockReviews() function

#### POST /api/reviews
- **Purpose**: Submit new review
- **Request Body**:
  ```json
  {
    "name": "string",
    "rating": "number (1-5)",
    "feedback": "string"
  }
  ```
- **Response**: Created review object with ID and timestamp
- **Status Codes**: 201 (created), 400 (validation error), 500 (server error)
- **Frontend Integration**: Replace addMockReview() function

#### GET /api/reviews/stats
- **Purpose**: Get review statistics (optional enhancement)
- **Response**:
  ```json
  {
    "totalReviews": "number",
    "averageRating": "number",
    "ratingDistribution": {
      "5": "number",
      "4": "number",
      "3": "number",
      "2": "number",
      "1": "number"
    }
  }
  ```

### 2. Database Schema

#### Reviews Collection (MongoDB)
```javascript
{
  _id: ObjectId,
  name: String (required, max 100 chars),
  rating: Number (required, 1-5),
  feedback: String (required, max 1000 chars),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated),
  isApproved: Boolean (default: true),
  language: String (optional: 'en' or 'ar'),
  ipAddress: String (optional, for moderation)
}
```

### 3. Data Validation Rules

#### Review Submission:
- **name**: Required, 2-100 characters, trim whitespace
- **rating**: Required integer between 1-5
- **feedback**: Required, 10-1000 characters, trim whitespace
- **language**: Optional, auto-detect or default to 'en'

#### Security Considerations:
- Input sanitization for XSS prevention
- Rate limiting for review submissions
- Optional: IP-based duplicate submission prevention
- Optional: Content moderation for inappropriate content

### 4. Frontend Integration Points

#### File: /app/frontend/src/components/TranslationSite.js
- **Line 90-95**: Replace getMockReviews() with API call
- **Line 120-140**: Replace addMockReview() with API call
- **Error Handling**: Add loading states and error messages
- **Success Feedback**: Show success message after review submission

#### Environment Variables:
- **Frontend**: Already configured with REACT_APP_BACKEND_URL
- **Backend**: MongoDB connection via existing MONGO_URL

### 5. API Response Format

#### Success Response:
```json
{
  "success": true,
  "data": "object or array",
  "message": "string (optional)"
}
```

#### Error Response:
```json
{
  "success": false,
  "error": "string",
  "details": "object (optional)"
}
```

### 6. Migration Strategy

#### Phase 1 - Backend Setup:
1. Create Review model in backend
2. Implement GET /api/reviews endpoint
3. Implement POST /api/reviews endpoint
4. Add validation middleware
5. Test endpoints with mock data

#### Phase 2 - Frontend Integration:
1. Create API service functions
2. Replace mock data calls with API calls
3. Add loading states and error handling
4. Test form submission and data display
5. Remove mock data files

#### Phase 3 - Enhancement (Optional):
1. Add review moderation system
2. Implement review statistics
3. Add pagination for large review sets
4. Add review search/filtering

### 7. Testing Requirements

#### Backend Testing:
- Unit tests for review model validation
- Integration tests for API endpoints
- Error handling tests
- Database connection tests

#### Frontend Integration Testing:
- Review submission form functionality
- Review display and rendering
- Language toggle with real data
- Error message display
- Loading state behavior

### 8. Files to Modify

#### Backend Files:
- `/app/backend/server.py` - Add review endpoints
- `/app/backend/models/` - Create Review model (new)
- `/app/backend/routes/` - Review routes (new)

#### Frontend Files:
- `/app/frontend/src/services/api.js` - API service (new)
- `/app/frontend/src/components/TranslationSite.js` - Replace mock calls
- `/app/frontend/src/utils/mockData.js` - Remove after migration

### 9. Success Criteria

#### Backend Implementation Complete When:
- ✅ All API endpoints respond correctly
- ✅ Data validation working properly
- ✅ Database operations functioning
- ✅ Error handling implemented
- ✅ CORS configured correctly

#### Frontend Integration Complete When:
- ✅ Review submission saves to database
- ✅ Reviews display from database
- ✅ Form validation and error handling work
- ✅ Loading states provide good UX
- ✅ Language toggle works with real data
- ✅ Mock data completely removed

## Notes:
- Current frontend is fully functional with mock data
- Backend implementation will be seamless replacement
- No UI changes required during backend integration
- All existing functionality will be preserved
- Database will be populated with current mock reviews as seed data