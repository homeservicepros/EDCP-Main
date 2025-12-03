
// Persistence utility with localStorage fallback
type Persistence = {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
};

// Type declaration for custom persistentStorage (sandbox environment)
declare global {
  interface Window {
    persistentStorage?: {
      setItem(key: string, value: string): Promise<void>;
      getItem(key: string): Promise<string | null>;
      removeItem(key: string): Promise<void>;
      clear(): Promise<void>;
    };
  }
}

export const persistence: Persistence = {
  async setItem(key: string, value: string): Promise<void> {
    if (window.persistentStorage) {
      return window.persistentStorage.setItem(key, value);
    }
    // Fallback to localStorage for production
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  
  async getItem(key: string): Promise<string | null> {
    if (window.persistentStorage) {
      return window.persistentStorage.getItem(key);
    }
    // Fallback to localStorage for production
    return Promise.resolve(localStorage.getItem(key));
  },
  
  async removeItem(key: string): Promise<void> {
    if (window.persistentStorage) {
      return window.persistentStorage.removeItem(key);
    }
    // Fallback to localStorage for production
    localStorage.removeItem(key);
    return Promise.resolve();
  },
  
  async clear(): Promise<void> {
    if (window.persistentStorage) {
      return window.persistentStorage.clear();
    }
    // Fallback to localStorage for production
    localStorage.clear();
    return Promise.resolve();
  },
};
