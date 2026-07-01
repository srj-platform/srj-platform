import { supabase } from "@/src/infrastructure/supabase/client";

export class OrganizationRepository {
  async getAll() {
    const { data, error } = await supabase
      .from("organizations")
      .select("*")
      .order("name");

    if (error) {
      throw error;
    }

    return data;
  }

  async getCount() {
    const { count, error } = await supabase
      .from("organizations")
      .select("*", {
        count: "exact",
        head: true,
      });

    if (error) {
      throw error;
    }

    return count ?? 0;
  }
}

export const organizationRepository =
  new OrganizationRepository();