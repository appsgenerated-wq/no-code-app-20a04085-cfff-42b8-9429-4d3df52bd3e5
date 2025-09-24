import config from '../constants.js';

const apiService = {
  authToken: null,

  setAuthToken(token) {
    this.authToken = token;
  },

  async request(endpoint, options = {}) {
    const url = `${config.API_BASE_URL}/${config.APP_ID}${endpoint}`;
    const headers = {
      ...options.headers,
    };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    const configOptions = { ...options, headers };

    if (!(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
        if (options.body) {
            configOptions.body = JSON.stringify(options.body);
        }
    }

    try {
      const response = await fetch(url, configOptions);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: response.statusText }));
        console.error('API Error:', errorData);
        throw new Error(errorData.message || 'An API error occurred');
      }

      if (response.status === 204) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('Request failed:', error);
      throw error;
    }
  },

  get(endpoint) {
    return this.request(endpoint);
  },

  post(endpoint, data) {
    return this.request(endpoint, { method: 'POST', body: data });
  },

  put(endpoint, data) {
    return this.request(endpoint, { method: 'PUT', body: data });
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  },
};

export default apiService;
