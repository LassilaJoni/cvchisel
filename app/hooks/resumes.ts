import { createClient } from "../utils/supabase/server";
import { cookies } from 'next/headers'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

    export async function createResume(userId: any) {

        const supabase = createClientComponentClient();

        const { data, error } = await supabase
            .from('resumes')
            .insert([
                { title: 'New Resume' }
            ]);
    
        if (error) {
            console.error('Error creating resume:', error);
            throw error;
        }
    
        console.log('Resume created:', data);
        return data;
    }