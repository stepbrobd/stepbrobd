export const TrackingID = "G-SXZPG2HEB8"

type GTagEvent = {
    action: string
    category: string
    label: string
    value: number
}

export const pageView = (url: URL) => {
    window.gtag("config", TrackingID, {
        page_path: url
    })
}

export const event = ({action, category, label, value}: GTagEvent) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    })
}
