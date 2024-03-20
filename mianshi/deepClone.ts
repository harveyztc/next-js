const deepClone = (obj: WeakKey | null, visited = new WeakSet()) => {
    // 处理非对象和循环引用
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (visited.has(obj)) {
        return visited.get(obj);
    }

    // 特殊对象处理：函数、Date、RegExp等
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }

    // 处理数组和普通对象
    const newObj = Array.isArray(obj) ? [] : {};
    visited.set(obj, newObj);

    // 增强属性枚举，处理Symbol和普通属性
    const props = Array.from(Object.getOwnPropertyNames(obj))
        .concat(Object.getOwnPropertySymbols(obj).map(sym => sym.toString()));
    props.forEach(prop => {
        const value = obj[prop];
        newObj[prop] = deepClone(value, visited);
    });

    return newObj;
};
