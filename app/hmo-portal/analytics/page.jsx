// "use client";
// import { useState } from "react";
// import {
//   ArrowUpRight,
//   Building2,
//   CalendarDays,
//   Download,
//   Layers,
//   Receipt,
//   TrendingUp,
//   Users,
// } from "lucide-react";
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import { formatPrice } from "@/lib/utils";

// function StatCard({ label, value, detail, icon: Icon, tone }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//       <div className="flex items-start justify-between">
//         <p className="text-sm font-medium text-slate-500">{label}</p>
//         <span className={`rounded-xl p-2.5 ${tone}`}>
//           <Icon className="h-4 w-4" />
//         </span>
//       </div>
//       <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
//         {value}
//       </p>
//       <p className="mt-1 text-xs text-slate-500">{detail}</p>
//     </div>
//   );
// }

// const monthlyData = [
//   { month: "Jan", revenue: 14200000, claims: 8900000 },
//   { month: "Feb", revenue: 15800000, claims: 9400000 },
//   { month: "Mar", revenue: 17100000, claims: 10200000 },
//   { month: "Apr", revenue: 16900000, claims: 11100000 },
//   { month: "May", revenue: 19400000, claims: 11800000 },
//   { month: "Jun", revenue: 21500000, claims: 13200000 },
//   { month: "Jul", revenue: 23200000, claims: 14600000 },
//   { month: "Aug", revenue: 24800000, claims: 15400000 },
// ];

// const planDistribution = [
//   { name: "Gold Care Plus", enrollees: 6230, percentage: 42, color: "#1C7C54" },
//   { name: "Silver Family", enrollees: 4600, percentage: 31, color: "#3B82F6" },
//   { name: "Bronze Basic", enrollees: 2670, percentage: 18, color: "#F59E0B" },
//   { name: "Corporate Platinum", enrollees: 1350, percentage: 9, color: "#8B5CF6" },
// ];

// const topProviders = [
//   { name: "Lagoon Hospital Ikoyi", state: "Lagos", visits: 840, claimsPaid: 24600000, status: "98% Settled" },
//   { name: "Reddington Hospital", state: "Lagos", visits: 690, claimsPaid: 21800000, status: "97% Settled" },
//   { name: "Cedarcrest Hospital", state: "Abuja", visits: 540, claimsPaid: 18400000, status: "96% Settled" },
//   { name: "Lily Hospitals", state: "Delta", visits: 430, claimsPaid: 12200000, status: "95% Settled" },
// ];

// export default function HmoAnalyticsPage() {
//   const [timeRange, setTimeRange] = useState("ytd");

//   const today = new Date();
//   const formattedDate = today.toLocaleDateString("en-US", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
//       {/* Header */}
//       <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//         <div>
//           <p className="text-sm font-medium text-slate-500">{formattedDate}</p>
//           <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//             Analytics
//           </h1>
//           <p className="mt-1 text-sm text-slate-500">
//             Overview of enrollment growth, revenue, and claims.
//           </p>
//         </div>

//         {/* Time filters & Export */}
//         <div className="flex items-center gap-2">
//           <div className="flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
//             {[
//               { id: "30d", label: "30 Days" },
//               { id: "q3", label: "This Quarter" },
//               { id: "ytd", label: "Year to Date" },
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 type="button"
//                 onClick={() => setTimeRange(tab.id)}
//                 className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
//                   timeRange === tab.id
//                     ? "bg-slate-900 text-white shadow-xs"
//                     : "text-slate-600 hover:text-slate-900"
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           <button
//             type="button"
//             className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
//           >
//             <Download className="h-3.5 w-3.5 text-slate-500" />
//             <span>Export</span>
//           </button>
//         </div>
//       </header>

//       {/* KPI Cards */}
//       <section className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
//         <StatCard
//           label="Active Enrollees"
//           value="14,850"
//           detail="+12.4% vs last period"
//           icon={Users}
//           tone="bg-blue-100 text-blue-700"
//         />
//         <StatCard
//           label="Gross Revenue"
//           value="₦152.9M"
//           detail="Total premiums collected"
//           icon={TrendingUp}
//           tone="bg-emerald-100 text-emerald-700"
//         />
//         <StatCard
//           label="Claims Paid"
//           value="₦94.6M"
//           detail="Medical claims disbursed"
//           icon={Receipt}
//           tone="bg-amber-100 text-amber-700"
//         />
//         <StatCard
//           label="Loss Ratio"
//           value="61.8%"
//           detail="Target < 70% (Healthy)"
//           icon={Building2}
//           tone="bg-violet-100 text-violet-700"
//         />
//       </section>

//       {/* Charts Section */}
//       <section className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
//         {/* Revenue & Claims Trend */}
//         <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
//             <div>
//               <h2 className="text-base font-bold text-slate-900">
//                 Premiums vs Claims Payout
//               </h2>
//               <p className="text-xs text-slate-500">Monthly overview (2026)</p>
//             </div>
//             <div className="flex items-center gap-4 text-xs">
//               <div className="flex items-center gap-1.5">
//                 <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
//                 <span className="text-slate-600">Revenue</span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <span className="h-2.5 w-2.5 rounded-full bg-slate-400" />
//                 <span className="text-slate-600">Claims</span>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 h-64 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart
//                 data={monthlyData}
//                 margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
//               >
//                 <defs>
//                   <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#1C7C54" stopOpacity={0.15} />
//                     <stop offset="95%" stopColor="#1C7C54" stopOpacity={0} />
//                   </linearGradient>
//                   <linearGradient id="claimGrad" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#94A3B8" stopOpacity={0.15} />
//                     <stop offset="95%" stopColor="#94A3B8" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
//                 <XAxis
//                   dataKey="month"
//                   tickLine={false}
//                   axisLine={false}
//                   tick={{ fill: "#64748B", fontSize: 12 }}
//                 />
//                 <YAxis
//                   tickLine={false}
//                   axisLine={false}
//                   tick={{ fill: "#64748B", fontSize: 11 }}
//                   tickFormatter={(val) => `₦${val / 1000000}M`}
//                 />
//                 <Tooltip
//                   formatter={(value) => [formatPrice(value), ""]}
//                   contentStyle={{
//                     backgroundColor: "#FFFFFF",
//                     borderRadius: "12px",
//                     border: "1px solid #E2E8F0",
//                     fontSize: "12px",
//                   }}
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="revenue"
//                   name="Revenue"
//                   stroke="#1C7C54"
//                   strokeWidth={2}
//                   fillOpacity={1}
//                   fill="url(#revGrad)"
//                 />
//                 <Area
//                   type="monotone"
//                   dataKey="claims"
//                   name="Claims"
//                   stroke="#64748B"
//                   strokeWidth={2}
//                   fillOpacity={1}
//                   fill="url(#claimGrad)"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Enrollment by Plan */}
//         <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//           <div className="flex items-center justify-between">
//             <h2 className="text-base font-bold text-slate-900">
//               Plan Distribution
//             </h2>
//             <Layers className="h-4 w-4 text-slate-400" />
//           </div>
//           <p className="mt-1 text-xs text-slate-500">
//             Active members across plan tiers
//           </p>

//           <div className="mt-6 space-y-4">
//             {planDistribution.map((plan) => (
//               <div key={plan.name}>
//                 <div className="flex items-center justify-between text-xs">
//                   <span className="font-medium text-slate-700">{plan.name}</span>
//                   <span className="font-semibold text-slate-900">
//                     {plan.enrollees.toLocaleString()}{" "}
//                     <span className="text-slate-400 font-normal">({plan.percentage}%)</span>
//                   </span>
//                 </div>
//                 <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
//                   <div
//                     className="h-2 rounded-full transition-all duration-300"
//                     style={{
//                       width: `${plan.percentage}%`,
//                       backgroundColor: plan.color,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Top Hospital Providers */}
//       <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
//         <div className="flex items-center justify-between">
//           <div>
//             <h2 className="text-base font-bold text-slate-900">
//               Top Partner Hospitals
//             </h2>
//             <p className="text-xs text-slate-500">
//               Highest utilization across the provider network
//             </p>
//           </div>
//         </div>

//         <div className="mt-5 overflow-x-auto">
//           <table className="w-full text-left text-xs">
//             <thead>
//               <tr className="border-b border-slate-100 text-slate-400">
//                 <th className="pb-3 font-medium">Hospital</th>
//                 <th className="pb-3 font-medium">Location</th>
//                 <th className="pb-3 font-medium text-right">Visits</th>
//                 <th className="pb-3 font-medium text-right">Claims Paid</th>
//                 <th className="pb-3 font-medium text-right">Settlement</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100 text-slate-700">
//               {topProviders.map((hospital) => (
//                 <tr key={hospital.name} className="hover:bg-slate-50/60">
//                   <td className="py-3 font-semibold text-slate-900">
//                     {hospital.name}
//                   </td>
//                   <td className="py-3 text-slate-500">{hospital.state}</td>
//                   <td className="py-3 text-right font-medium text-slate-800">
//                     {hospital.visits.toLocaleString()}
//                   </td>
//                   <td className="py-3 text-right font-semibold text-slate-900">
//                     {formatPrice(hospital.claimsPaid)}
//                   </td>
//                   <td className="py-3 text-right">
//                     <span className="inline-block rounded-md bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
//                       {hospital.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function page() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Analytics
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Overview of enrollment growth, revenue, and claims.
      </p>
      <p className="mt-1 text-lg text-primary">
        Page not implemented yet
      </p>

    </div>
  )
}
