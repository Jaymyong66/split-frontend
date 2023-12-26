import {create} from "zustand";

const useAddressStore = create((set) => ({
  address: "",
  setAddress: (text) => set({ address: text }),
  addresses: [],
  setAddresses: (newAddress) =>
    set((prev) => ({
      addresses: [...prev.addresses, newAddress],
    })),
}));

export default useAddressStore;
