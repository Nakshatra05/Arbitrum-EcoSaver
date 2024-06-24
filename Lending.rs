// Lending.rs

#![no_std]
extern crate alloc;
use alloc::collections::BTreeMap;

#[derive(Default)]
pub struct LendingContract {
    lenders: BTreeMap<String, u64>,
    borrowers: BTreeMap<String, u64>,
}

impl LendingContract {
    pub fn lend(&mut self, lender: String, amount: u64) {
        let balance = self.lenders.entry(lender).or_insert(0);
        *balance += amount;
    }

    pub fn borrow(&mut self, borrower: String, amount: u64) {
        let debt = self.borrowers.entry(borrower).or_insert(0);
        *debt += amount;
    }

    pub fn get_balance(&self, user: String) -> u64 {
        *self.lenders.get(&user).unwrap_or(&0)
    }
}
