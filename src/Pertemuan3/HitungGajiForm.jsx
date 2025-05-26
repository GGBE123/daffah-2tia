import { useState } from "react";
import InputDuit from "./components/InputDuit";
import Output from "./components/output";

export default function HitungGajiForm() {
	const [gaji, setGaji] = useState("");
	const pajak = 0.11;
	const gajiNumber = parseFloat(gaji) || 0;
	const totalGaji = gajiNumber - (gajiNumber * pajak);

	return (
		<div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
					Hitung Gaji Bersih
				</h2>

				<div className="mb-4">
					<div className="mb-4">
						<InputDuit
							label="Nama"
							type="number"
							placeholder="Silahkan Input Gaji"
							onChange={(e) => setGaji(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-1">
						Pajak: <b className="text-red-500">11%</b>
					</label>
				</div>

				<Output gaji={gajiNumber} totalGaji={totalGaji} />
			</div>
		</div>
	);
}