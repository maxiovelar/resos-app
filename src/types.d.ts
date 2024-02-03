export interface Restaurant {
  id: string;
  name: string;
  image: string;
  address: string;
  tags: string[];
  hours: {
    open: string; // Assuming opening hours are in string format (e.g., "18:00")
    close: string; // Assuming closing hours are in string format (e.g., "23:00")
  };
}
