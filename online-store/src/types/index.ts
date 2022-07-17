export interface Boat {
    num: string;
    name: string;
    quantity: string;
    producer: string;
    color: string;
    size: string;
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
    size: string[];
    quantity: string[];
}
