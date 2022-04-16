interface TemporalStorage<T> {
    body: T;
    expireDate: Date;
}

export function setInTemporalStorage<T>(url: string, body: T, minutesUntilExpire: number = 5) {
    const expireDate = new Date();
    expireDate.setMinutes(new Date().getMinutes() + minutesUntilExpire);

    const storageData: TemporalStorage<T> = { body, expireDate };
    const stringifiedData = JSON.stringify(storageData);
    localStorage.setItem(url, stringifiedData);
}

export function fetchTemporalStorage<T>(url: string): T | null {
    const result = localStorage.getItem(url);
    if (!result) {
        return null;
    }
    const storage: TemporalStorage<T> = JSON.parse(result);
    const expireDate = new Date(storage.expireDate);
    if (expireDate.getTime() < new Date().getTime()) {
        localStorage.removeItem(url);
        return null;
    }
    return storage.body;
}
