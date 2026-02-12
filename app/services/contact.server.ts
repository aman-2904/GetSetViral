import { supabase } from '~/lib/supabase.server';

export interface BrandSubmission {
  submission_type: 'brand';
  full_name: string;
  email: string;
  phone_number: string;
  help_with: string[];
  project_budget: string;
  project_details: string;
}

export interface CreatorSubmission {
  submission_type: 'creator';
  full_name: string;
  email: string;
  phone_number: string;
  instagram_link: string;
  youtube_link: string;
  other_links: string;
  about_message: string;
}

type ContactSubmission = BrandSubmission | CreatorSubmission;

export async function createContactSubmission(data: ContactSubmission) {
  if (data.submission_type === 'brand') {
    const { data: result, error } = await supabase
      .from('brand_contacts')
      .insert([{
        full_name: data.full_name,
        email: data.email,
        phone_number: data.phone_number,
        services: data.help_with,
        project_budget: data.project_budget,
        project_details: data.project_details,
      }])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to save brand contact: ${error.message}`);
    }

    return result;
  } else {
    const { data: result, error } = await supabase
      .from('creator_contacts')
      .insert([{
        full_name: data.full_name,
        email: data.email,
        phone_number: data.phone_number,
        instagram_link: data.instagram_link || null,
        youtube_link: data.youtube_link || null,
        other_links: data.other_links || null,
        message: data.about_message,
      }])
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to save creator contact: ${error.message}`);
    }

    return result;
  }
}
