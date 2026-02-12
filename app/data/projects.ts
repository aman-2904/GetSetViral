export interface Project {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "fenty-beauty",
    title: "Fenty Beauty",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    description: "Premium beauty brand collaboration",
  },
  {
    id: "acko-insurance",
    title: "Acko Insurance",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    description: "Digital insurance platform campaign",
  },
  {
    id: "lakme",
    title: "Lakme",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    description: "Cosmetics brand partnership",
  },
  {
    id: "auto-vista",
    title: "Auto Vista Care",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    description: "Automotive service excellence",
  },
  {
    id: "tirtir",
    title: "TIRTIR",
    imageUrl: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80",
    description: "K-beauty brand collaboration",
  },
  {
    id: "tech-startup",
    title: "Tech Innovations",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    description: "Technology startup branding",
  },
];
