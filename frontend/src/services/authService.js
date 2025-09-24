import apiService from './apiService';

/**
 * @typedef {import('./types').User} User
 */

const authService = {
  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{token: string}>}
   */
  async login(email, password) {
    return apiService.post('/login', { email, password });
  },

  /**
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @returns {Promise<{token: string}>}
   */
  async register(name, email, password) {
    return apiService.post('/register', { name, email, password });
  },

  /**
   * @returns {Promise<{data: User}>}
   */
  async getProfile() {
    return apiService.get('/profile');
  },
};

export default authService;
