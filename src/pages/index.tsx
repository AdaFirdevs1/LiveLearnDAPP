// Home.tsx

import { AppBar } from "@/components/AppBar";
import ReviewCard from "@/components/ReviewCard";
import { useEffect, useState } from "react";
import { Review } from "@/models/Review";
import ReviewForm from "@/components/Form";


const REVIEW_PROGRAM_ID = "FSU42ZmC8G2eiqFQC16Ya7632sp1CTfgqpEpapFxbEP2";

export default function Home() {
    const [txid, setTxid] = useState("");
    const [reviews, setReviews] = useState<Review[]>([]);

    const [name_surname, setNameSurname] = useState("");
    const [num_of_training, setNumOfTraining] = useState(0);
    const [phone_num, setPhoneNum] = useState("");

    useEffect(() => {
        const fetchAccounts = async () => {
            
        };
        fetchAccounts();
    }, []);

    const handleSubmit = () => {
        const review = new Review(name_surname, num_of_training, phone_num);
        handleTransactionSubmit(review);
        console.log("hello"); //programın çalışıp çalışmadığını kontrol etmek için
    };

    const handleTransactionSubmit = async (review: Review) => {
        
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <AppBar />
            </div>

            <div className="after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                <ReviewForm
                    name_surname={name_surname}
                    phone_num={phone_num}
                    num_of_training={num_of_training}
                    setNameSurname={setNameSurname}
                    setPhoneNum={setPhoneNum}
                    setNumOfTraining={setNumOfTraining}
                    handleSubmit={handleSubmit}
                />
            </div>

            {txid && <div>{txid}</div>}

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                {reviews &&
                    reviews.map((review) => {
                        return (
                            <ReviewCard key={review.name_surname} review={review} />
                        );
                    })}
            </div>
        </main>
    );
}
