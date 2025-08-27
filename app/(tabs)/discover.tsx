// app/(tabs)/discover.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Badge({ text, tone = "stock", bgColor, textColor }: { text: string; tone?: "stock" | "re"; bgColor?: string; textColor?: string;}) {
  const toneBg = tone === "stock" ? "#F6A43A" : "#A9E3A9";
  const toneFg = tone === "stock" ? "#3a2300" : "#105b10";

  const bg = bgColor ?? toneBg;
  const color = textColor ?? toneFg;
  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.badgeText, { color }]}>{text}</Text>
    </View>
  );
}

function PickRow({
  icon = "arrow-down",
  title,
  badge,
  badgeTone = "stock",
  badgeBgColor,
  badgeTextColor
}: {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  badge?: string;
  badgeTone?: "stock" | "re";
  badgeBgColor?: string;
  badgeTextColor?: string;
}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.pickRow}>
      <Ionicons name={icon as any} size={20} />
      <Text style={styles.pickTitle} numberOfLines={1}>
        {title}
      </Text>
      {/* Only render Badge if badge prop is provided */}
      {badge ? <Badge text={badge} tone={badgeTone as any} bgColor={badgeBgColor} textColor={badgeTextColor}/> : null}
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

export default function DiscoverScreen() {
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
        <Text style={styles.headerGreeting}>Discover</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Risk Heat Header*/}
        <View style={styles.card}>
          <SectionTitle>Today's Portfolio Volatility & Risk Score</SectionTitle>
          <PickRow icon="analytics-outline" title="Volatility" badge="13.4%"/>
          <View style={styles.separator} />
          <PickRow icon="alert-circle-outline" title="Portfolio Risk Score" badge="49" />
        </View>

        {/* Event Feed */}
        <View style={styles.card}>
          <SectionTitle>Event Feed</SectionTitle>

          <PickRow icon="globe-outline" title="Geopolitics"/>
          <View style={styles.separator} />
          <PickRow icon="image-outline" title="Macro" />
          <View style={styles.separator}/>
          <PickRow icon="business-outline" title="Regulatory"/>
          <View style={styles.separator}/>
          <PickRow icon="logo-bitcoin" title="Crypto"/>
        </View>
        
        {/* Impact Panel */}
        <View style={styles.card}>
          <SectionTitle>Your Affected Exposures</SectionTitle>

          <PickRow icon="arrow-up" title="Oil" badge="+10%" badgeTone="re"/>
          <View style={styles.separator} />
          <PickRow icon="arrow-up" title="Rates" badge="+50 bps" badgeTone="re" />
          <View style={styles.separator} />
          <PickRow title="USD" badge="-2%" badgeTone="stock"/>
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
