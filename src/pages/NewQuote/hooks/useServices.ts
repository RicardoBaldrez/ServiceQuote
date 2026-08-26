import { useState } from 'react';

export function useServices() {
  const [services, setServices] = useState<any[]>([]);
  const [serviceChosed, setServiceChosed] = useState<any>(null);
  const [showBottomSheetServices, setShowBottomSheetServices] = useState(false);

  const openBottomSheet = (service?: any) => {
    setServiceChosed(service ?? null);
    setShowBottomSheetServices(true);
  };

  const closeBottomSheet = () => {
    setShowBottomSheetServices(false);
    setServiceChosed(null);
  };

  const createService = (service: any) => {
    setServices((prev) => [...prev, service]);
  };

  const editService = (service: any) => {
    setServices((prev) => prev.map((s) => (s.id === service.id ? service : s)));
  };

  const deleteService = (service: any) => {
    setServices((prev) => prev.filter((s) => s.id !== service.id));
  };

  return {
    services,
    setServices,
    serviceChosed,
    showBottomSheetServices,
    openBottomSheet,
    closeBottomSheet,
    createService,
    editService,
    deleteService,
  };
}
