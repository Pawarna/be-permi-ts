import { Request, Response } from 'express'
import { fetchLandingContent, fetchMember, fetchPartners } from '../services/landing.service'
import { successResponse, errorResponse } from '../utils/response';


const getLandingContent = async (req: Request, res: Response) => {
    try {
        const data = await fetchLandingContent();

        return successResponse(res, data, "Berhasil mengambil konten landing page")
    } catch (error) {
        console.error("Error di getLandingContent", error);
        return errorResponse(res, "Gagal mengambil data konten", 500)
    }
}

const getPartners = async (req: Request, res: Response) => {
    try {
        const data = await fetchPartners();

        return successResponse(res, data, "List partner berhasil diambil")
    } catch (error) {
        console.error(error);
        return errorResponse(res, "Gagal mengambil data partner", 500);
    }
}

const getMembers = async (req: Request, res: Response) => {
    try {
        const data = await fetchMember();

        return successResponse(res, data, "List himpunanan berhasil diambil");
    } catch (error) {
        console.error(error);
        return errorResponse(res, "Gagal mengambil data himpunanan", 500);
    }
}

export {
    getLandingContent,
    getPartners,
    getMembers,
}