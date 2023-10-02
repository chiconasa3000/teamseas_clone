import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

async function main(){
    //empty donation table
    await prisma.donation.deleteMany();
    const alice = await prisma.donation.create({
        data:{
            email: 'alisce@prisma.io',
            displayName: 'Alice',
            count:5,
        },
    });

    console.log({alice});
}

main()
    .catch((e)=>{
        console.log(e);
        process.exit(1);
    })
    .finally(async ()=>{
        //end connection on prisma client
        await prisma.$disconnect();
    });