
import { supabase } from "@/integrations/supabase/client";

export interface BrandingAsset {
  id: string;
  type: 'logo' | 'banner' | 'collage' | 'foto-doctor' | 'foto-doctora';
  url: string;
  alt_text: string;
  uploaded_by: string;
  created_at: string;
}

/**
 * Fetches a specific branding asset by type
 * @param type The type of asset to fetch
 * @returns The branding asset data or null if not found
 */
export const getBrandingAssetByType = async (type: BrandingAsset['type']): Promise<BrandingAsset | null> => {
  const { data, error } = await supabase
    .from('branding_assets')
    .select('*')
    .eq('type', type)
    .single();
  
  if (error) {
    console.error("Error fetching branding asset:", error);
    return null;
  }
  
  return data;
};

/**
 * Fetches all branding assets
 * @returns Array of branding assets
 */
export const getAllBrandingAssets = async (): Promise<BrandingAsset[]> => {
  const { data, error } = await supabase
    .from('branding_assets')
    .select('*');
  
  if (error) {
    console.error("Error fetching all branding assets:", error);
    return [];
  }
  
  return data || [];
};

/**
 * Updates a branding asset
 * @param id The ID of the asset to update
 * @param updates The updates to apply
 * @returns Boolean indicating success
 */
export const updateBrandingAsset = async (
  id: string, 
  updates: Partial<Omit<BrandingAsset, 'id' | 'created_at'>>
): Promise<boolean> => {
  const { error } = await supabase
    .from('branding_assets')
    .update(updates)
    .eq('id', id);
  
  if (error) {
    console.error("Error updating branding asset:", error);
    return false;
  }
  
  return true;
};
