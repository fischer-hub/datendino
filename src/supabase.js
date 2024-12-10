// supabase stuff
const supabaseClient = supabase.createClient('https://mmudxfcbitoyiyiizdfy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tdWR4ZmNiaXRveWl5aWl6ZGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4MzcxNTksImV4cCI6MjA0OTQxMzE1OX0.Mob30niNDKcBDgvzNR2vQMSm16-MgrxqxvTGcTzcN7g')

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