export interface LanyardData {
    kv: { string: any }

    spotify: {
        track_id: string

        timestamps: {
            start: number
            end: number
        }

        album?: string
        album_art_url?: string
        
        artist: string
        song: string
    } | null

    discord_user: {
        id: string
        username: string
        avatar: string
        discriminator: string
        bot: boolean
        
        clan: {
            tag: string
            badge: string
            identity_enabled: boolean
            identity_guild_id: string
        } | null

        global_name: string
        
        avatar_decoration_data: {
            asset: string
            sku_id: string
        } | null
        
        display_name: string
        public_flags: number
    }

    activities: [
        {
            id: string
            name: string
            type: number
            flags?: number
            session_id?: string
            details?: string
            state: string

            timestamps?: {
                start: number
                end?: number
            }
            
            assets?: {
                large_image?: string
                large_text?: string
                small_image?: string
                small_text?: string
            }

            emoji?: {
                id?: string
                name: string
                animated?: boolean
            }

            sync_id?: string
            created_at: number

            party?: {
                id?: string
                size?: [number, number]
            }
        }
    ]

    discord_status: "online" | "offline" | "idle" | "dnd",

    active_on_discord_mobile: boolean
    active_on_discord_desktop: boolean
    active_on_discord_web: boolean

    listening_to_spotify: boolean
}

export interface LanyardResponse {
    data?: LanyardData
    
    error?: {
        code: string
        message: string
    }

    success: boolean
}
