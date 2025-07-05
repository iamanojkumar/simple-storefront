// Shared constants used across the application

export const APP_NAME = 'Simple Storefront';
export const APP_VERSION = '1.0.0';

// API Configuration
export const API_BASE_URL = typeof window !== 'undefined' 
  ? (window as any).__ENV__?.REACT_APP_API_URL || 'http://localhost:5000/api'
  : 'http://localhost:5000/api';
export const API_TIMEOUT = 10000; // 10 seconds

// Pagination
export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 100;

// Order Status
export const ORDER_STATUS = {
  PLACED: 'placed',
  PAID: 'paid',
  DELIVERED: 'delivered',
} as const;

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const;

// User Roles
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

// Product Categories
export const PRODUCT_CATEGORIES = [
  'ebooks',
  'courses',
  'templates',
  'software',
  'music',
  'art',
  'other',
] as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  CART_DATA: 'cart_data',
  THEME: 'theme',
} as const;

// Validation Rules
export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  EMAIL_MAX_LENGTH: 254,
  NAME_MAX_LENGTH: 100,
  PRODUCT_NAME_MAX_LENGTH: 200,
  PRODUCT_DESCRIPTION_MAX_LENGTH: 1000,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  WEAK_PASSWORD: 'Password must be at least 8 characters with uppercase, lowercase, and number',
  REQUIRED_FIELD: 'This field is required',
  NETWORK_ERROR: 'Network error. Please try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  NOT_FOUND: 'Resource not found',
  SERVER_ERROR: 'Server error. Please try again later.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful',
  REGISTER_SUCCESS: 'Registration successful',
  LOGOUT_SUCCESS: 'Logout successful',
  ORDER_PLACED: 'Order placed successfully',
  PAYMENT_SUCCESS: 'Payment completed successfully',
  PRODUCT_ADDED: 'Product added to cart',
  PRODUCT_REMOVED: 'Product removed from cart',
  PROFILE_UPDATED: 'Profile updated successfully',
} as const;

// Theme Configuration
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  MAX_FILES: 5,
} as const;

// Search Configuration
export const SEARCH_CONFIG = {
  MIN_QUERY_LENGTH: 2,
  DEBOUNCE_DELAY: 300,
  MAX_RESULTS: 50,
} as const; 