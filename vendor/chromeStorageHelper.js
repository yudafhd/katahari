const hasChromeStorage =
  typeof chrome !== 'undefined' &&
  chrome &&
  chrome.storage &&
  chrome.storage.local;

const storage = {
  set: (key, value) => {
    if (hasChromeStorage) {
      return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: value }, () => resolve(true));
      });
    }
    return new Promise((resolve) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.warn('localStorage set failed', e);
      }
      resolve(true);
    });
  },

  get: (key) => {
    if (hasChromeStorage) {
      return new Promise((resolve) => {
        chrome.storage.local.get([key], (result) => {
          resolve(result[key]);
        });
      });
    }

    return new Promise((resolve) => {
      try {
        const raw = localStorage.getItem(key);
        resolve(raw ? JSON.parse(raw) : null);
      } catch (e) {
        // fallback: return raw string if parsing fails
        resolve(localStorage.getItem(key));
      }
    });
  },

  remove: (key) => {
    if (hasChromeStorage) {
      return new Promise((resolve) => {
        chrome.storage.local.remove(key, () => resolve(true));
      });
    }
    return new Promise((resolve) => {
      localStorage.removeItem(key);
      resolve(true);
    });
  },

  clear: () => {
    if (hasChromeStorage) {
      return new Promise((resolve) => {
        chrome.storage.local.clear(() => resolve(true));
      });
    }
    return new Promise((resolve) => {
      localStorage.clear();
      resolve(true);
    });
  },
};

export default storage;
