import apiClient from './AxiosClient'
import type { AxiosResponse  } from 'axios'
import type { AdvisorInfo } from '@/advisor'

export default{
    getAdvisor(perPage: number, page: number): Promise<AxiosResponse<AdvisorInfo[]>>{
        return apiClient.get<AdvisorInfo[]>('advisors?_limit=' + perPage + '&_page=' + page)
    },
    getAdvisorByID(id: number): Promise<AxiosResponse<AdvisorInfo>>{
        return apiClient.get<AdvisorInfo>('advisors/' +id.toString())
    }
//     ,
//     saveAdvisor(event: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>>{
//         return apiClient.post<AdvisorInfo>('/events',event)
//     },
//     getAdvisorsByKeyword(keyword: string, perPage: number, page: number): Promise<AxiosResponse<AdvisorInfo[]>> {
//     return apiClient.get<AdvisorInfo[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
// }
}