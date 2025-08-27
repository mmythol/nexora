// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome to Timor Leste!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Book an appointment with Patricia</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Go to Patrcia's appointment</ThemedText>
//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Try not to go delusional like Abarny</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });




















// import { Ionicons } from "@expo/vector-icons";
// import React from "react";
// import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";
// import { G, Path, Svg } from "react-native-svg";

// const CURRENCY = "SGD";
// const NET_WORTH = "26,478.33";
// const ALLOCATION = [
//   { label: "Crypto", value: 85, color: "#2F2A35" },
//   { label: "Stocks", value: 12, color: "#6E6476" },
//   { label: "Crypto", value: 3,  color: "#B8B0BE" },
// ];

// // Simple donut chart using react-native-svg
// function DonutPie({
//   data = ALLOCATION,
//   size = 200,
//   innerRadius = 70,
// }: {
//   data?: { value: number; color: string; label: string }[];
//   size?: number;
//   innerRadius?: number;
// }) {
//   const total = data.reduce((s, d) => s + d.value, 0);
//   const radius = size / 2;
//   let cumulative = 0;

//   const arcs = data.map((d, i) => {
//     const startAngle = (cumulative / total) * 2 * Math.PI;
//     cumulative += d.value;
//     const endAngle = (cumulative / total) * 2 * Math.PI;

//     const x1 = radius + radius * Math.cos(startAngle);
//     const y1 = radius + radius * Math.sin(startAngle);
//     const x2 = radius + radius * Math.cos(endAngle);
//     const y2 = radius + radius * Math.sin(endAngle);
//     const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

//     const path = [
//       `M ${radius} ${radius}`,
//       `L ${x1} ${y1}`,
//       `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
//       "Z",
//     ].join(" ");

//     return <Path key={i} d={path} fill={d.color} />;
//   });

//   // punch inner hole
//   const hole = (
//     <Path
//       d={`
//         M ${radius} ${radius}
//         m -${innerRadius}, 0
//         a ${innerRadius},${innerRadius} 0 1,0 ${innerRadius * 2},0
//         a ${innerRadius},${innerRadius} 0 1,0 -${innerRadius * 2},0
//       `}
//       fill="#fff"
//     />
//   );

//   return (
//     <Svg width={size} height={size}>
//       <G>{arcs}{hole}</G>
//     </Svg>
//   );
// }

// function Badge({ text, tone = "stock" }: { text: string; tone?: "stock" | "re" }) {
//   const bg = tone === "stock" ? "#F6A43A" : "#A9E3A9";
//   const color = tone === "stock" ? "#3a2300" : "#105b10";
//   return (
//     <View style={[styles.badge, { backgroundColor: bg }]}>
//       <Text style={[styles.badgeText, { color }]}>{text}</Text>
//     </View>
//   );
// }

// function PickRow({
//   icon = "arrow-up",
//   title,
//   badge,
//   badgeTone = "stock",
// }: {
//   icon?: keyof typeof Ionicons.glyphMap;
//   title: string;
//   badge: string;
//   badgeTone?: "stock" | "re";
// }) {
//   return (
//     <TouchableOpacity activeOpacity={0.8} style={styles.pickRow}>
//       <Ionicons name={icon as any} size={20} />
//       <Text style={styles.pickTitle} numberOfLines={1}>{title}</Text>
//       <Badge text={badge} tone={badgeTone as any} />
//       <Ionicons name="chevron-forward" size={20} />
//     </TouchableOpacity>
//   );
// }

// // Section title with purple accent line
// function SectionTitle({ children }: { children: React.ReactNode }) {
//   return (
//     <View style={styles.sectionTitleRow}>
//       <View style={styles.sectionAccent} />
//       <Text style={styles.sectionLabel}>{children}</Text>
//     </View>
//   );
// }

// export default function HomeScreen() {
//   const insets = useSafeAreaInsets();

//   return (
//     <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
//       {/* Top header / settings + bell */}
//       <View style={styles.header}>
//         <Text style={styles.headerGreeting}>Welcome back,</Text>
//         <Text style={styles.headerName}>Alex</Text>

//         {/* Settings (top-left) */}
//         <TouchableOpacity style={styles.settingsBtn} activeOpacity={0.8}>
//           <Ionicons name="settings-outline" size={22} color="#000" />
//         </TouchableOpacity>

//         {/* Notifications (top-right) */}
//         <TouchableOpacity style={styles.bellBtn} activeOpacity={0.8}>
//           <Ionicons name="notifications-outline" size={22} color="#000" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
//         {/* Net worth card */}
//         <View style={styles.card}>
//           <SectionTitle>Your Net Worth</SectionTitle>
//           <View style={styles.netRow}>
//             <View>
//               <Text style={styles.netCurrency}>{CURRENCY}</Text>
//             </View>
//             <Text style={styles.netValue}>{NET_WORTH}</Text>
//           </View>
//         </View>

//         {/* Assets donut + labels */}
//         <View style={styles.card}>
//           <SectionTitle>Your Assets</SectionTitle>
//           <View style={styles.pieWrap}>
//             <DonutPie />
//           </View>
//           <View style={styles.legend}>
//             <View style={styles.legendItem}>
//               <View style={[styles.legendDot, { backgroundColor: "#2F2A35" }]} />
//               <Text style={styles.legendText}>85% Crypto</Text>
//             </View>
//             <View style={styles.legendItem}>
//               <View style={[styles.legendDot, { backgroundColor: "#6E6476" }]} />
//               <Text style={styles.legendText}>12% Stocks</Text>
//             </View>
//             <View style={styles.legendItem}>
//               <View style={[styles.legendDot, { backgroundColor: "#B8B0BE" }]} />
//               <Text style={styles.legendText}>3% Crypto</Text>
//             </View>
//           </View>
//         </View>

//         {/* Top picks */}
//         <View style={styles.card}>
//           <SectionTitle>Top 3 Current AI Investment Picks</SectionTitle>

//           <PickRow title="NVIDIA Corporation (NVDA)" badge="Stock" />
//           <View style={styles.separator} />
//           <PickRow title="Tengah Smart Town (Residential)" badge="RE" badgeTone="re" />
//           <View style={styles.separator} />
//           <PickRow title="Palantir Technologies (PLTR)" badge="Stock" />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const PURPLE = "#D9C5F4"; // header band & accents
// const BG = "#EFEAF6";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: BG,
//   },
//   header: {
//     backgroundColor: PURPLE,
//     paddingHorizontal: 18,
//     paddingTop: 20,       // taller
//     paddingBottom: 30,    // taller
//     minHeight: 120,       // ensure visual height
//     justifyContent: "center",
//   },
//   headerGreeting: {
//     fontSize: 28,         // bigger
//     fontWeight: "800",
//     color: "#000",
//   },
//   headerName: {
//     marginTop: -2,        // tighter spacing
//     fontSize: 32,         // bigger
//     fontWeight: "800",
//     color: "#000",
//   },
//   // Top-left settings button
//   settingsBtn: {
//     position: "absolute",
//     left: 16,
//     top: 18,
//     height: 34,
//     width: 34,
//     borderRadius: 17,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255,255,255,0.6)",
//   },
//   // Top-right bell
//   bellBtn: {
//     position: "absolute",
//     right: 16,
//     top: 18,
//     height: 34,
//     width: 34,
//     borderRadius: 17,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgba(255,255,255,0.6)",
//   },
//   scrollContent: {
//     padding: 14,
//     paddingBottom: 28,
//     gap: 12,
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 14,
//     shadowColor: "#000",
//     shadowOpacity: 0.06,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     elevation: 2,
//   },
//   // Section title with purple accent
//   sectionTitleRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   sectionAccent: {
//     width: 4,
//     height: 20,
//     backgroundColor: PURPLE,
//     //borderRadius: 3,
//     marginRight: 8,
//   },
//   sectionLabel: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#7a7a7a",
//   },
//   netRow: {
//     flexDirection: "row",
//     alignItems: "flex-end",
//     justifyContent: "space-between",
//   },
//   netCurrency: {
//     fontSize: 12,
//     color: "#7a7a7a",
//   },
//   netValue: {
//     fontSize: 24,
//     fontWeight: "800",
//     letterSpacing: 1,
//   },
//   pieWrap: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 6,
//     marginBottom: 10,
//   },
//   legend: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 6,
//   },
//   legendItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//   },
//   legendDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//   },
//   legendText: {
//     fontSize: 12,
//     color: "#444",
//   },
//   pickRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//     paddingVertical: 12,
//   },
//   pickTitle: {
//     flex: 1,
//     fontSize: 15,
//     fontWeight: "600",
//   },
//   badge: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 10,
//     marginRight: 6,
//   },
//   badgeText: {
//     fontSize: 11,
//     fontWeight: "700",
//   },
//   separator: {
//     height: StyleSheet.hairlineWidth,
//     backgroundColor: "#eee",
//   },
// });



import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { G, Path, Svg } from "react-native-svg";

const CURRENCY = "SGD";
const NET_WORTH = "26,478.33";
const ALLOCATION = [
  { label: "Crypto", value: 85, color: "#2F2A35" },
  { label: "Stocks", value: 12, color: "#6E6476" },
  { label: "Crypto", value: 3,  color: "#B8B0BE" },
];

// Simple donut chart using react-native-svg
function DonutPie({
  data = ALLOCATION,
  size = 200,
  innerRadius = 70,
}: {
  data?: { value: number; color: string; label: string }[];
  size?: number;
  innerRadius?: number;
}) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const radius = size / 2;
  let cumulative = 0;

  const arcs = data.map((d, i) => {
    const startAngle = (cumulative / total) * 2 * Math.PI;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 2 * Math.PI;

    const x1 = radius + radius * Math.cos(startAngle);
    const y1 = radius + radius * Math.sin(startAngle);
    const x2 = radius + radius * Math.cos(endAngle);
    const y2 = radius + radius * Math.sin(endAngle);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

    const path = [
      `M ${radius} ${radius}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
      "Z",
    ].join(" ");

    return <Path key={i} d={path} fill={d.color} />;
  });

  // punch inner hole
  const hole = (
    <Path
      d={`
        M ${radius} ${radius}
        m -${innerRadius}, 0
        a ${innerRadius},${innerRadius} 0 1,0 ${innerRadius * 2},0
        a ${innerRadius},${innerRadius} 0 1,0 -${innerRadius * 2},0
      `}
      fill="#fff"
    />
  );

  return (
    <Svg width={size} height={size}>
      <G>{arcs}{hole}</G>
    </Svg>
  );
}

function Badge({ text, tone = "stock" }: { text: string; tone?: "stock" | "re" }) {
  const bg = tone === "stock" ? "#F6A43A" : "#A9E3A9";
  const color = tone === "stock" ? "#3a2300" : "#105b10";
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.badgeText, { color }]}>{text}</Text>
    </View>
  );
}

function PickRow({
  icon = "arrow-up",
  title,
  badge,
  badgeTone = "stock",
}: {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  badge: string;
  badgeTone?: "stock" | "re";
}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.pickRow}>
      <Ionicons name={icon as any} size={20} />
      <Text style={styles.pickTitle} numberOfLines={1}>{title}</Text>
      <Badge text={badge} tone={badgeTone as any} />
      <Ionicons name="chevron-forward" size={20} />
    </TouchableOpacity>
  );
}

// Section title with purple accent line
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.sectionTitleRow}>
      <View style={styles.sectionAccent} />
      <Text style={styles.sectionLabel}>{children}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header with icon row (top) and title (below) */}
      <View style={styles.header}>
        {/* top row: settings (left) + bell (right) */}
        <View style={styles.headerTopRow}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.8}>
            <Ionicons name="settings-outline" size={22} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.8}>
            <Ionicons name="notifications-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* title below icons */}
        <Text style={styles.headerGreeting}>Welcome back,</Text>
        <Text style={styles.headerName}>Alex</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Net worth card */}
        <View style={styles.card}>
          <SectionTitle>Your Net Worth</SectionTitle>
          <View style={styles.netRow}>
            <View>
              <Text style={styles.netCurrency}>{CURRENCY}</Text>
            </View>
            <Text style={styles.netValue}>{NET_WORTH}</Text>
          </View>
        </View>

        {/* Assets donut + labels */}
        <View style={styles.card}>
          <SectionTitle>Your Assets</SectionTitle>
          <View style={styles.pieWrap}>
            <DonutPie />
          </View>
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: "#2F2A35" }]} />
              <Text style={styles.legendText}>85% Crypto</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: "#6E6476" }]} />
              <Text style={styles.legendText}>12% Stocks</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: "#B8B0BE" }]} />
              <Text style={styles.legendText}>3% Crypto</Text>
            </View>
          </View>
        </View>

        {/* Top picks */}
        <View style={styles.card}>
          <SectionTitle>Top 3 Current AI Investment Picks</SectionTitle>

          <PickRow title="NVIDIA Corporation (NVDA)" badge="Stock" />
          <View style={styles.separator} />
          <PickRow title="Tengah Smart Town (Residential)" badge="RE" badgeTone="re" />
          <View style={styles.separator} />
          <PickRow title="Palantir Technologies (PLTR)" badge="Stock" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const PURPLE = "#D9C5F4"; // header band & accents
const BG = "#EFEAF6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  header: {
    backgroundColor: PURPLE,
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: "flex-start",
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30, // push the title below the icons
  },
  iconBtn: {
    height: 34,
    width: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  headerGreeting: {
    fontSize: 33,         // bigger
    fontWeight: "800",
    color: "#000",
  },
  headerName: {
    marginTop: -2,        // tighter spacing
    fontSize: 35,         // bigger
    fontWeight: "800",
    color: "#000",
  },
  scrollContent: {
    padding: 14,
    paddingBottom: 28,
    gap: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  // Section title with purple accent
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionAccent: {
    width: 4,
    height: 20,
    backgroundColor: PURPLE,
    //borderRadius: 3,
    marginRight: 8,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7a7a7a",
  },
  netRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  netCurrency: {
    fontSize: 12,
    color: "#7a7a7a",
  },
  netValue: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 1,
  },
  pieWrap: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    marginBottom: 10,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 6,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendText: {
    fontSize: 12,
    color: "#444",
  },
  pickRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
  },
  pickTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginRight: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "700",
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#eee",
  },
});
