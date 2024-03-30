import CampCatalog from "@/components/CampCatalog";
import { render, screen, waitFor } from '@testing-library/react'
import { CampgroundJson } from '../interfaces'; 

const mockCampResult: CampgroundJson = {
    success: true,
    count: 2,
    pagination:{},
    data: [{
        "name": "Camp Big Mt.",
        "address": "233 Everland Camp Big Mountain City, Mt 19012",
        "tel": "02-2323213",
        "image": "https://files.gqthailand.com/uploads/20220623152747.jpg",
        "__v": 0,
        "id": "6601699e349d34048dd941c0"
    },
    {
        "name": "Camp Doi Talay Mhok",
        "address": "123 Campground Ave Forest City, CA 12345",
        "tel": "02-9237189",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Naphamethinidon%2C_Naphaphonphumisiri_near_summit_of_Doi_Inthanon.jpg",
        "__v": 0,
        "id": "66013c102d562b7602946133"
    }]
};

describe('CampCatalog', () => {
    it('The page should show the correct number of mock datas', async () => {
        const mockPromise = Promise.resolve(mockCampResult);
        
        const campCatalog = await CampCatalog({ campgroundsJson: mockPromise });
        
        render(campCatalog);

        await waitFor(() => {
            const exploreText = screen.getByText('Explore 2 models in our catalog');
            expect(exploreText).toBeInTheDocument();
        });
    });
});
