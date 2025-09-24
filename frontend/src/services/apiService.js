import config from '../constants';

const apiService = {
  authToken: null,

  setAuthToken(token) {
    this.authToken = token;
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
  },

  async request(endpoint, options = {}) {
    const url = `${config.API_BASE_URL}/${config.APP_ID}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 204) {
        return null;
      }

      const responseData = await response.json();

      if (!response.ok) {
        const errorMessage = responseData.message || `HTTP ${response.status}: ${response.statusText}`;
        if (response.status === 401) {
            this.logout();
        }
        throw new Error(errorMessage);
      }

      return responseData;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  get(endpoint) {
    return this.request(endpoint);
  },

  post(endpoint, data) {
    return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) });
  },

  put(endpoint, data) {
    return this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) });
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  },

  logout() {
    this.setAuthToken(null);
  }
};

export default apiService;
