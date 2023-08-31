import { connectToDatabase, type Database } from '../../../utils/db';

export const GET = async (req:any) => {
    const { db }: { db: Database } = await connectToDatabase();
    const { id } = req.params;

    const data = await db.collection('page').findOne({ 
        hash: id
     });

    if (!data) {
        return new Response('Data not found', { status: 404 });
    }

    return new Response(JSON.stringify(data), {
        headers: { 'content-type': 'application/json' },
    });
};
