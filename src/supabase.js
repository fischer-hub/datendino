// supabase stuff
const supabaseClient = supabase.createClient('https://rybieesubyhgzqfwavvt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5YmllZXN1YnloZ3pxZndhdnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4OTQyMzgsImV4cCI6MjA2MzQ3MDIzOH0.5liz_z8IwY_ni_kzGr1FCq9Cig16NYyf5BdBLUYrzio')

async function fetchData() {
    const { data, error } = await supabaseClient
    .from('leaderboard')
    .select('*')
    .order('score', { ascending: false })

    if (error) {
    console.error('Error fetching data:', error);
    } else {
    console.log('Data:', data);
    return data
    }
}


async function insertData(leaderboardEntry) {
    const { error } = await supabaseClient
    .from('leaderboard')
    .insert(leaderboardEntry);

    if (error) {
    console.error('Error inserting data:', error);
    } else {
    console.log('Successfully pushed entry to leaderboard.');
    }
}