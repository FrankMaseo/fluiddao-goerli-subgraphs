import {
  AuctionBid as AuctionBidEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionDurationUpdated as AuctionDurationUpdatedEvent,
  AuctionExtended as AuctionExtendedEvent,
  AuctionMinBidIncrementPercentageUpdated as AuctionMinBidIncrementPercentageUpdatedEvent,
  AuctionReservePriceUpdated as AuctionReservePriceUpdatedEvent,
  AuctionSettled as AuctionSettledEvent,
  AuctionTimeBufferUpdated as AuctionTimeBufferUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  Unpaused as UnpausedEvent
} from "../generated/AuctionHouse/AuctionHouse"
import {
  AuctionBid,
  AuctionCreated,
  AuctionDurationUpdated,
  AuctionExtended,
  AuctionMinBidIncrementPercentageUpdated,
  AuctionReservePriceUpdated,
  AuctionSettled,
  AuctionTimeBufferUpdated,
  OwnershipTransferred,
  Paused,
  Unpaused
} from "../generated/schema"

export function handleAuctionBid(event: AuctionBidEvent): void {
  let entity = new AuctionBid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.FLUIDnftId = event.params.FLUIDnftId
  entity.sender = event.params.sender
  entity.value = event.params.value
  entity.extended = event.params.extended

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = new AuctionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.FLUIDnftId = event.params.FLUIDnftId
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionDurationUpdated(
  event: AuctionDurationUpdatedEvent
): void {
  let entity = new AuctionDurationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.duration = event.params.duration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionExtended(event: AuctionExtendedEvent): void {
  let entity = new AuctionExtended(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.FLUIDnftId = event.params.FLUIDnftId
  entity.endTime = event.params.endTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionMinBidIncrementPercentageUpdated(
  event: AuctionMinBidIncrementPercentageUpdatedEvent
): void {
  let entity = new AuctionMinBidIncrementPercentageUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minBidIncrementPercentage = event.params.minBidIncrementPercentage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionReservePriceUpdated(
  event: AuctionReservePriceUpdatedEvent
): void {
  let entity = new AuctionReservePriceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.reservePrice = event.params.reservePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionSettled(event: AuctionSettledEvent): void {
  let entity = new AuctionSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.FLUIDnftId = event.params.FLUIDnftId
  entity.winner = event.params.winner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionTimeBufferUpdated(
  event: AuctionTimeBufferUpdatedEvent
): void {
  let entity = new AuctionTimeBufferUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.timeBuffer = event.params.timeBuffer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
