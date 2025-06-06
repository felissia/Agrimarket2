"use client"

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface BankAccount {
  id: string
  name: string
  bank: string
  accountNumber: string
  logo: string
}

interface Transaction {
  id: string
  type: string
  date: string
  time: string
  amount: number
}

export default function BankingScreen() {
  const router = useRouter()

  const bankAccounts: BankAccount[] = [
    {
      id: "1",
      name: "Iman Stefanus Abdi",
      bank: "BCA",
      accountNumber: "7289999015",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/200px-Bank_Central_Asia.svg.png",
    },
    {
      id: "2",
      name: "Cathlyn Shanice Darmawan",
      bank: "BCA",
      accountNumber: "9990235881",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/200px-Bank_Central_Asia.svg.png",
    },
  ]

  const transactions: Transaction[] = [
    {
      id: "1",
      type: "Check Out",
      date: "1 May 2025",
      time: "10:21 AM",
      amount: 500000,
    },
    {
      id: "2",
      type: "Top Up",
      date: "9 April 2025",
      time: "21:21 PM",
      amount: 370000,
    },
    {
      id: "3",
      type: "Check Out",
      date: "2 April 2025",
      time: "04:04 AM",
      amount: 100000,
    },
    {
      id: "4",
      type: "Top Up",
      date: "11 February 2025",
      time: "10:21 AM",
      amount: 850000,
    },
  ]

  const formatCurrency = (amount: number) => {
    return `+ ${amount.toLocaleString("id-ID")}`
  }

  const handleAddAccount = () => {
    console.log("Add new bank account")
    // Add navigation to add account screen
    router.push('/konsumen/profile/settings/banking/addAccount')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/konsumen/profile/settings")}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}> Rekening Bank</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Registered Accounts Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rekening Terdaftar</Text>

          {bankAccounts.map((account) => (
            <TouchableOpacity key={account.id} style={styles.accountCard}>
              <View style={styles.accountInfo}>
                <Text style={styles.accountName}>{account.name}</Text>
                <Text style={styles.accountDetails}>
                  {account.bank} - {account.accountNumber}
                </Text>
              </View>
              <View style={styles.bankLogo}>
                <Text style={styles.bankText}>BCA</Text>
              </View>
            </TouchableOpacity>
          ))}

          

          <TouchableOpacity style={styles.addAccountButton} onPress={handleAddAccount}>
            <Ionicons name="add" size={20} color="#4CAF50" />
            <Text style={styles.addAccountText}>Tambah Rekening</Text>
          </TouchableOpacity>
        </View>

        {/* Transaction Records Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Catatan Transaksi</Text>

          {transactions.map((transaction) => (
            <TouchableOpacity key={transaction.id} style={styles.transactionCard}>
              <View style={styles.transactionIcon}>
                <Ionicons name="business-outline" size={24} color="#2196F3" />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionType}>{transaction.type}</Text>
                <Text style={styles.transactionDate}>
                  {transaction.date}, {transaction.time}
                </Text>
              </View>
              <Text
                style={[
                  styles.transactionAmount,
                    transaction.type === "Check Out" && { color: "#F44336" } // red for Check Out
                    ]}
>
                {transaction.type === "Check Out"
                  ? `- ${transaction.amount.toLocaleString("id-ID")}`
                  : `+ ${transaction.amount.toLocaleString("id-ID")}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginRight: 32,
  },
  headerSpacer: {
    width: 32,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 32,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  accountCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  accountDetails: {
    fontSize: 14,
    color: "#666",
  },
  bankLogo: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  bankText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  addAccountButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderStyle: "dashed",
  },
  addAccountText: {
    fontSize: 16,
    color: "#4CAF50",
    marginLeft: 8,
    fontWeight: "500",
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  transactionIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#E3F2FD",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  transactionDate: {
    fontSize: 14,
    color: "#666",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4CAF50",
  },
})
