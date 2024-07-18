export interface recipeDetailType {
  cooking_time: number,
  cooking_video: string,
  country_id: number,
  country_info:
  {
    code: string,
    country_name: string,
    created_at: string,
    id: number,
  }[],
  created_at: string,
  dificulty_level: number,
  food_image: string,
  food_info: string,
  food_name: string,
  how_to_cook_info: string | null,
  id: number,
  ingredient_info: string | null,
  instructions: string[],
  rating: number,
  source_of: string,
  updated_at: string,
  utensil_info: string | null,
  writen_by: number,
}

export interface UserProfile {
  id: number;
  username: string;
}