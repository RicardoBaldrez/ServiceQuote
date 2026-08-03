export enum StatusType {
  Draft = 'Rascunho',
  Sent = 'Enviado',
  Approved = 'Aprovado',
  Rejected = 'Recusado',
}

export interface StatusColorSet {
  background: string;
  dot: string;
  text: string;
}

export const StatusColors: Record<StatusType, StatusColorSet> = {
  [StatusType.Draft]: {
    background: '#E8E8E8',
    dot: '#8A8A8A',
    text: '#4A4A4A',
  },
  [StatusType.Sent]: {
    background: '#DCE8FF',
    dot: '#4A7CFF',
    text: '#1E4FCC',
  },
  [StatusType.Approved]: {
    background: '#BFF7BE',
    dot: '#4BB84A',
    text: '#30752F',
  },
  [StatusType.Rejected]: {
    background: '#FFD6D6',
    dot: '#E54848',
    text: '#A32020',
  },
};
