export type TDefaultState = {
    searchData: Array<TDataPhoto>,
    value: string,
    data: {
       date: string,
       explanation: string,
       title: string,
       url: string
    }, 
    isLoading: boolean,
    currentDate: string,
}

type TDataPhoto = {
    data: [TData],
    links: [TImgData, TVideoData] 
    
}

export type TDataPhotoOfTheDay = {
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string,
}
export type TData = {
    center: string,
    title: string,
    nasa_id: string,
    media_type: string,
    date_created: string,
    description: string,
}

export type TImgData = {
    href: string,
    rel: string,
    render: string,
}
export type TVideoData = {
    href: string,
    rel: string,
}

export type TGetDataType = {
    data: {
        collection: {
        items: Array<TDataPhoto>;
    }
    }
  };