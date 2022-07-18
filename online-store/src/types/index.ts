export interface Boat {
    num: string;
    name: string;
    quantity: number;
    producer: string;
    color: string;
    size: number;
    seats: string;
    favorite: boolean;
}

export interface ValueFilters {
    producer: string[];
    seats: string[];
    color: string[];
    popular: boolean;
}

export interface RangeFilters {
    size: number[];
    quantity: number[];
}
