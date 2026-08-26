import { useState } from 'react';

import { Service } from '@/types/service';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [serviceChosed, setServiceChosed] = useState<Service | null>(null);
  const [showBottomSheetServices, setShowBottomSheetServices] = useState(false);

  const openBottomSheet = (service?: Service) => {
    setServiceChosed(service ?? null);
    setShowBottomSheetServices(true);
  };

  const closeBottomSheet = () => {
    setShowBottomSheetServices(false);
    setServiceChosed(null);
  };

  const createService = (service: Service) => {
    setServices((prev) => [...prev, service]);
  };

  const editService = (service: Service) => {
    setServices((prev) => prev.map((s) => (s.id === service.id ? service : s)));
  };

  const deleteService = (service: Service) => {
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
