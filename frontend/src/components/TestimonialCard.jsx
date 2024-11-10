import {Star} from "lucide-react";

export default function TestimonialCard({ name, message }) {
  return (
        <div class="bg-gray-700 shadow overflow-hidden rounded-lg px-4 py-6 mx-4 shrink-0 w-80">
            <div className="flex">
            <Star class="h-6 w-6 text-yellow-400 mx-auto" />
            <Star class="h-6 w-6 text-yellow-400 mx-auto" />
            <Star class="h-6 w-6 text-yellow-400 mx-auto" />
            <Star class="h-6 w-6 text-yellow-400 mx-auto" />
            <Star class="h-6 w-6 text-yellow-400 mx-auto" />
            </div>
          <p class="mt-4 text-base text-gray-300">
            {message}
          </p>
          <p class="mt-2 font-medium text-white">{name}</p>
        </div>
    );
}

