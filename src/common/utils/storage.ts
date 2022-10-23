/**
 * @source: https://github.com/ustbhuangyi/storage
 * @desc: 本地存储实现,封装localStorage和sessionStorage
 */
const isServer = typeof window === 'undefined';

const store: any = {
  version: '1.1.1',
  disabled: false,
  storage: !isServer ? window.localStorage : null,
  session: {
    storage: !isServer ? window.sessionStorage : null
  }
}

const api: any = {
  set (key: string, val: any) {
    if (this.disabled) {
      return
    }
    if (val === undefined) {
      return this.remove(key)
    }
    this.storage.setItem(key, serialize(val))
    return val
  },

  get (key: string, def: any) {
    if (this.disabled) {
      return def
    }
    let val = deserialize(this.storage.getItem(key))
    return (val === undefined ? def : val)
  },

  has (key: string) {
    return this.get(key) !== undefined
  },

  remove (key: string) {
    if (this.disabled) {
      return
    }
    this.storage.removeItem(key)
  },

  clear () {
    if (this.disabled) {
      return
    }
    this.storage && this.storage.clear()
  },

  getAll () {
    if (this.disabled) {
      return null
    }
    let ret = {} as any
    this.forEach((key: string, val: any) => {
      ret[key] = val
    })
    return ret
  },

  forEach (callback: (key: string, val: any) => {}) {
    if (this.disabled) {
      return
    }
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.storage.key(i);
      callback(key, this.get(key))
    }
  }
}

Object.assign(store, api)

Object.assign(store.session, api)

function serialize (val: any) {
  return JSON.stringify(val)
}

function deserialize (val: any) {
  if (typeof val !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(val)
  } catch (e) {
    return val || undefined
  }
}

try {
  const testKey = '__storejs__'
  store.set(testKey, testKey)
  if (store.get(testKey) !== testKey) {
    store.disabled = true
  }
  store.remove(testKey)
} catch (e) {
  store.disabled = true
}

export default store;
