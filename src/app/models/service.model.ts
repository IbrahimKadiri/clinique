export interface Service {
  id: string;
  title: string;
  icon?: string; // si tu gardes emoji / icône
  image?: string; // si tu utilises une image
  shortDesc: string;
  longDesc: string;
  modalOpen?: boolean;
}
