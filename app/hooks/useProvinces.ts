// Map/province fetching removed — stub hook
export default function useProvinces() {
  return { provinces: [], loading: false, error: null, allCoords: () => [] } as const;
}
