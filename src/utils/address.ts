export const shortAddress = (address: string) => {
    if (!address) return '';
    return address.slice(0, 5) + '...' + address.slice(address.length - 5, address.length);
}

export const shortAddressTable = (address: string) => {
    if (!address) return '';
    return address.slice(0, 8) + '...' + address.slice(address.length - 5, address.length);
}