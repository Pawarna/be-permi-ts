import {prisma} from '../lib/prisma';

export const fetchLandingContent = async () => {
    return await prisma.landingContent.findFirst();
}

export const fetchPartners = async () => {
    return await prisma.partner.findMany();
}

export const fetchMember = async () => {
    return await prisma.member.findMany();
}