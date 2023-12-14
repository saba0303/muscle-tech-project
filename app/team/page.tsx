import VideoPlayer from "@/components/video/VideoPlayer"
import TeamBanner from "@/components/team/teambanner/TeamBanner"
import JoiningDetails from "@/components/team/joining/JoiningDetails"

import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'MuscleTECH-Team',
    description: 'Muscle-Tech Team Contacts',
}


export default function TeamPage() {

    return <>
        <VideoPlayer />
        <TeamBanner />
        <JoiningDetails />
    </>
}